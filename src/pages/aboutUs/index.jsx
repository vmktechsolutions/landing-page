const AboutUs = () => {
    // Para component ko sahi tarike se define karna hoga
    const Para = ({ text }) => {
        return <p className="text-slate-500 text-sm my-3">{text}</p>;
    };

    return (
        <section className="my-5 p-14 mt-20">
            <h1 className="font-semibold text-slate-800 text-2xl">About Us</h1>
            <hr />

            <Para text={<>Welcome to <strong>Ai-Google</strong>, where we believe in the power of innovation and technology to transform the world. Our mission is to bring cutting-edge solutions to everyday problems, making life simpler, smarter, and more efficient.</>} />

            <Para text="Founded by a team of passionate developers, designers, and engineers, Ai-Google was created with the vision to merge artificial intelligence with everyday experiences. We are committed to delivering intelligent, user-centric solutions that make technology more accessible and impactful." />

            <Para text="At Ai-Google, we provide a range of innovative AI-driven services, from personalized recommendations and intelligent search functionalities to machine learning-powered automation. Our goal is to continuously improve our offerings and help businesses and individuals stay ahead in an ever-evolving technological landscape." />

            <Para text={<>What sets us apart is our commitment to <strong>simplicity and efficiency</strong>. We understand that AI can be intimidating, which is why we’ve built intuitive tools that anyone can use. Our platform is easy to navigate, fast, and secure, ensuring a seamless experience for all users.</>} />

            <Para text="Our talented team is the backbone of Ai-Google. Every member is dedicated to pushing boundaries, solving problems, and creating valuable solutions. We foster a culture of collaboration and creativity, where innovation thrives, and diverse perspectives are encouraged." />

            <Para text="We are constantly exploring new ways to integrate AI into industries like healthcare, education, finance, and more. By staying at the forefront of AI research and development, we aim to build a smarter, more connected future." />

            <Para text="Customer satisfaction is our top priority. We listen to your feedback, continuously improve, and adapt to meet your needs. Our goal is to not only meet but exceed your expectations with every interaction." />

            <Para text="As we look to the future, Ai-Google remains committed to driving digital transformation with the latest AI technologies. Together, we are shaping the future, one innovation at a time." />

            <Para text="Thank you for choosing Ai-Google – where technology meets intelligence, and the future is now." />
        </section>
    );
};

export default AboutUs;
