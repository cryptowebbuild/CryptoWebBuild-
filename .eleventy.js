// এটি Eleventy (11ty) কনফিগারেশন ফাইল
module.exports = function(eleventyConfig) {

  // এই লাইনটি Eleventy-কে বলে যে HTML ফাইলগুলোকেও টেমপ্লেট হিসেবে ব্যবহার করতে হবে
  eleventyConfig.setTemplateFormats([
    "html",
    "liquid",
    "md",
    "css", // style.css ফাইলটি সরাসরি কপি করার জন্য
    "js", // script.js ফাইলটি সরাসরি কপি করার জন্য
    "xml" // sitemap.xml ফাইলটি সরাসরি কপি করার জন্য
  ]);

  // আপনার সব স্ট্যাটিক ফাইল এবং ছবি কপি করুন
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("images"); // images ফোল্ডার
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  // আপনার সব Favicon কপি করুন
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("favicon-192x192.png");
  eleventyConfig.addPassthroughCopy("favicon-96x96.png"); // এই ফাইলগুলো আপনার GitHub-এ ছিল
  eleventyConfig.addPassthroughCopy("favicon-512x512.png"); // এই ফাইলগুলো আপনার GitHub-এ ছিল

  // আপনার সব প্রজেক্টের ছবি কপি করুন
  eleventyConfig.addPassthroughCopy("BNBCHAIN-project-new.webp");
  eleventyConfig.addPassthroughCopy("ecommerce-project-new.webp");
  eleventyConfig.addPassthroughCopy("hero-avatar.webp");
  eleventyConfig.addPassthroughCopy("og-blog-1.jpg");
  eleventyConfig.addPassthroughCopy("og-blog-2.jpg");
  eleventyConfig.addPassthroughCopy("og-blog-3.jpg");
  eleventyConfig.addPassthroughCopy("og-image.jpg");
  eleventyConfig.addPassthroughCopy("solana-project-new.webp");

  // এটি কনফিগারেশন রিটার্ন করে
  return {
    dir: {
      input: ".", // ইনপুট ফোল্ডার (মূল ফোল্ডার)
      output: "_site" // আউটপুট ফোল্ডার (এখানে সাইটটি বিল্ড হবে)
    },
    passthroughFileCopy: true,
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  };
};
