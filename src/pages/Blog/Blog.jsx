
const Blog = () => {
    return (
        <div className="min-h-[500px]">
            <div className="collapse collapse-arrow bg-base-300 text-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title font-medium">
                    What is One way data binding?
                </div>
                <div className="collapse-content">
                    <p>One-way binding: this is an effortless way of implementing data binding. Data consumers are automatically updated when the source (provider) data changes, but not the other way around. Two-way binding: Two-way binding is where changes from the data consumer or data source (provider) automatically update the other.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;