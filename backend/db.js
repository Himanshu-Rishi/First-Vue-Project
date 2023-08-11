import {db, Table} from './db.config.js'

// Create or Update Employee
const createOrUpdate = async (data = {}) =>{
    const params = {
        TableName: Table,
        Item: data
    }

    try{
        await db.put(params).promise()
        return { success: true }
    } catch(error){
        return { success: false}
    }
}

// Read all Employee
const readAllEmployee = async()=>{
    const params = {
        TableName: Table
    }

    try{
        const { Items = [] } = await db.scan(params).promise()
        return { success: true, data: Items }

    } catch(error){
        return { success: false, data: null }
    }

}

// Read Employee by ID
const getEmployeeById = async (value, key = "email") => {
  const params = {
    TableName: Table,
    Key: {
      [key]:value,
    },
  };
  try {
    const { Item = {} } = await db.get(params).promise();
    return { success: true, data: Item };
  } catch (error) {
    return { success: false, data: null };
  }
};


export {
    createOrUpdate,
    readAllEmployee,
    getEmployeeById
}