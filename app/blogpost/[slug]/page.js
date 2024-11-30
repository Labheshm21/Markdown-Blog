import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { JSDOM } from "jsdom"; // For server-side DOMPurify
import createDOMPurify from "dompurify";


import { notFound } from "next/navigation"
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'

import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import OnThisPage from "@/components/onthispage";

export default async function BlogPostPage({ params }) {
    const { slug } = params;

    try {
        // Resolve file path
        const filepath = path.join(process.cwd(), "content", `${slug}.md`);
        console.log("Resolved File Path:", filepath);

        // Read and parse the Markdown file - only need to do this once
        const fileContent = fs.readFileSync(filepath, "utf-8");
        const { content, data } = matter(fileContent);
        console.log("Parsed Data:", data);
        console.log("Parsed Content:", content);

        // Sanitize content using DOMPurify (server-side)
        const window = new JSDOM("").window;
        const DOMPurify = createDOMPurify(window);
        const sanitizedContent = DOMPurify.sanitize(content);

        if (!data || !content) {
            throw new Error("Invalid blog post format");
        }

        const processor = unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeDocument, {title: '👋🌍'})
            .use(rehypeFormat)
            .use(rehypeStringify) 
            .use(rehypeSlug)
            .use(rehypeAutolinkHeadings)
            .use(rehypePrettyCode, {
                theme: "github-dark",
                transformers: [
                    transformerCopyButton({
                        visibility: 'always',
                        feedbackDuration: 3_000,
                    }),
                ],
            })
        const htmlContent = (await processor.process(content)).toString()

        // Render blog post
        return (
            <div className="max-w-5xl mx-auto px-4 py-8 bg-white dark:bg-gray-900">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{data.title}</h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
                    <p className="flex items-center">
                        <span className="font-medium">By {data.author}</span>
                    </p>
                    <span>•</span>
                    <p className="font-medium">{data.date}</p>
                </div>
                <div className="prose dark:prose-invert mb-8">
                    <p className="text-lg text-gray-700 dark:text-gray-300">{data.description}</p>
                </div>
                <img src={data.image} alt={data.title} className="mb-8 rounded-lg" />
                <div
                    className="prose max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                ></div>
                <OnThisPage htmlContent={htmlContent}/>
            </div>
        );
    } catch (error) {
        console.error("Error loading blog post:", error);
        return (
            <div className="max-w-5xl mx-auto px-4 py-8 bg-white dark:bg-gray-900">
                <p className="text-red-500">
                    Error: Unable to load the blog post. Please check the file path or content format.
                </p>
            </div>
        );
    }
}
