

const Feedback = () => {
    return (
        <div className="bg-[#04203A] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">We value your feedback!</h2>
                <p className="text-sm md:text-base text-gray-400 mb-8">
                    Let us know how we can improve and make UID even better for you.
                </p>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-left text-sm font-medium text-gray-300">Name:</label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-left text-sm font-medium text-gray-300">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="your.email@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-left text-sm font-medium text-gray-300">Phone No:</label>
                        <input
                            type="tel"
                            id="phone"
                            className="mt-1 block w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Your Phone Number"
                        />
                    </div>
                    <div>
                        <label htmlFor="feedback" className="block text-left text-sm font-medium text-gray-300">Feedback:</label>
                        <textarea
                            id="feedback"
                            rows="4"
                            className="mt-1 block w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Share your thoughts..."
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#6495ED] text-white p-2 rounded-md hover:bg-[#6a93df] transition duration-300">
                        Submit Feedback
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Feedback;