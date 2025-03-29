import React from "react";
import Button from "../layout/Button.jsx";
import BlogCard from "../layout/BlogCard.jsx";
import img1 from "../../assets/image/blog1.jpg";
import img2 from "../../assets/image/blog2.jpg";
import img3 from "../../assets/image/blog3.jpg";
import img4 from "../../assets/image/blog4.jpg";
import img5 from "../../assets/image/blog5.jpg";
import img6 from "../../assets/image/blog6.jpg";

const Blogs = () => {
    return (
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
            <div className=" flex flex-col items-center lg:flex-row justify-between">
                <div>
                    <h1 className=" text-4xl font-semibold text-center lg:text-start">
                        Latest Post
                    </h1>
                    <p className=" mt-2 text-center lg:text-start">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, quidem.
                    </p>
                </div>
                <div className=" mt-4 lg:mt-0">
                    <Button title="Our Articles" />
                </div>
            </div>
            <div className=" my-8">
                <div className=" flex flex-wrap justify-center gap-5">
                    <BlogCard image={img1} headlines="Unraveling the Mysteries of Sleep" />
                    <BlogCard image={img2} headlines="The Heart-Healthy Diet" />
                    <BlogCard image={img3} headlines="Understanding Pediatric Vaccinations" />
                    <BlogCard image={img4} headlines="Navigating Mental Health" />
                    <BlogCard image={img5} headlines="The Importance of Regular Exercise" />
                    <BlogCard image={img6} headlines="Skin Health 101" />
                </div>
            </div>
        </div>
    );
};

export default Blogs;