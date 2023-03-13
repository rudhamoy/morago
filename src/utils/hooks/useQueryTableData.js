import { useQuery } from "@apollo/client";


export const useQueryTableData = (query, path, variables) => {

    // fetch category list
    const { data, loading } = useQuery(query, {
        variables
    });


    //  get the object property by path
    // receive data and pathname as an arguements
    const getObjectProperty = (object, path) => {
        if (object == null) { // null or undefined
            return object;
        }

        // since objectList is common to every path - hard code the name - saves the repetitive task
        let paths = [path, 'objectList']
        for (let i = 0; i < paths.length; ++i) {
            if (object == null) { // null or undefined
                return undefined;
            }
            const key = paths[i];
            object = object[key];
        }
        return object;
    };

    // add key to every data
    // table requires unique key
    let tableData = []
    if (!loading && data) {
        getObjectProperty(data, path).map((i, index) => {
            tableData.push({ ...i, key: index })
        })
    }

    return [ loading, tableData, data]
}
