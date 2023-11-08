
const Blog = () => {
    return (
        <div className="my-12">
            <div className="collapse collapse-arrow bg-base-300 text-lg mb-10">
                <input type="checkbox" className="peer" />
                <div className="collapse-title font-medium">
                    What is One way data binding?
                </div>
                <div className="collapse-content">
                    <p>One way data binding means data can only pass up to bottom.Like Parents to childern node.But can not pass data children to parent.Thats why it called one way data binfing.One-way binding: this is an effortless way of implementing data binding. Data consumers are automatically updated when the source (provider) data changes, but not the other way around.</p>
                </div>
            </div>


            <div className="collapse collapse-arrow bg-base-300 text-lg mb-10">
                <input type="checkbox" className="peer" />
                <div className="collapse-title font-medium">
                    What is NPM in node.js?
                </div>
                <div className="collapse-content">
                    <p>NPM means Node Package Manager. npm is a package manager for Node.js packages or modules.it is a liberary for javascript software packages.npm also has command-line tools to help you install the different packages and manage their dependencies.npm is free and world widly developer used npm to build website as they can use javascript by Node.js</p>
                </div>
            </div>


            <div className="collapse collapse-arrow bg-base-300 text-lg">
                <input type="checkbox" className="peer" />
                <div className="collapse-title font-medium">
                    Different between Mongodb database vs mySQL database?
                </div>
                <div className="collapse-content">
                    <table className="border-2 border-pink-500 w-full">
                        <tr>
                            <th className="border-2 border-pink-500 w-1/2">Mongodb</th>
                            <th className="border-2 border-pink-500 w-1/2">mySQL</th>
                        </tr>
                        <tr>
                            <td className="border-2 border-pink-500 w-1/2 pl-2">
                                Mongodb is non-relational database management system.
                            </td>
                            <td className="border-2 border-pink-500 w-1/2 pl-2">
                                MySQL is a relational database system
                            </td>
                        </tr>

                        <tr>
                            <td className="border-2 border-pink-500 w-1/2 pl-2">
                                Mongodb is document based.
                            </td>
                            <td className="border-2 border-pink-500 w-1/2 pl-2">
                                MySQL is a tabular format.
                            </td>
                        </tr>

                        <tr>
                            <td className="border-2 border-pink-500 w-1/2 pl-2">
                                It was designed to supplant the MySQL structure as an easier way to work with data.
                            </td>
                            <td className="border-2 border-pink-500 w-1/2 pl-2">
                                data is searchable and accessible in relation to another data point or set.
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Blog;