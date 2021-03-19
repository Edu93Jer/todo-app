import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { List, Checkbox, Button } from 'antd';
import 'antd/dist/antd.css'
import LIST_SERVICE from '../services/list'

const Home = () => {
    
    const [ listas, setListas ] = useState([{}])
    const [ cambio, setCambio ] = useState(null)
    const history = useHistory()

    useEffect(() => {
        const getLists = async () => {
            const { data } = await LIST_SERVICE.ALL()
            setListas(data)
        }
        getLists()
    }, [cambio])

    const onChange = (e, id) => {
        const updateActivity = async () => {
            const activity = await LIST_SERVICE.UPDATE(id)
            setCambio(activity)
        }
        updateActivity()
    }

    const irCrearList = () => {
        history.push('/createlist')
    }

    return (
        <>
        {listas.map(ele => {
            return(
                <List
                key
                size="small"
                header={<h2>{ele.title}</h2>}
                bordered
                dataSource={ele.activities}
                renderItem={item => <List.Item>{item.description} <><Checkbox checked={item.isItDone} onChange={(e) => onChange(e, item._id)}> is it completed?</Checkbox></></List.Item>}
                />
            )
        })}

        <Button type="primary" onClick={irCrearList}>Crear Lista</Button>
        </>
    )
};
  
  export default Home;






