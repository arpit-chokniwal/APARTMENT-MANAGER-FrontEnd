import styled from 'styled-components'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";
import  { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../Redux/action';

const Maindiv = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
border: 0px solid black;
width: 90%;
margin: auto;
gap: 2%;
padding: 30px;
`
const Div = styled.div`
border: 0px solid black;
height: 500px;
margin-top: 10px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
border-radius: 10%;
background-color: whitesmoke;
`
const Space = styled.div`
height: 200px;`

const Button = styled.button`
background-color: #dda15e;
padding: 10px 20px;
border-radius: 20%;
`

const Img = styled.img`
width: 100%;
height: 300px;
border-radius: 10%;

`
const P = styled.p`
margin-top: 5px;
font-weight: normal;
text-align: left;
margin-left: 20px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 20px;
`



export const Home = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [inpu,set]= useState('')
    useEffect(()=>{
        axios.get('https://recgf.herokuapp.com/user').then((res)=>{
            dispatch(addUser(res.data))
        })
    },[])
    const {user} = useSelector((s)=>s.user)
    // console.log(user)
        

function a(){
    axios.get('https://recgf.herokuapp.com/sort').then((res)=>{
        // console.log(res)
        dispatch(addUser(res.data))
    })
}

function r(e){
   
    axios.get(`https://recgf.herokuapp.com/input/${inpu}`).then((res)=>{
        // console.log(res.data)
        set('')
        dispatch(addUser(res.data))
    })
}

function s(e){
    console.log(e._id);
    navigate(`/Detail/${e._id}`)
}



    return <>
    <p style={{
        marginTop:'10px',
        marginBottom:'0px',
        fontWeight:'bold',
        textAlign:'center',
        fontFamily:'initial',
        fontSize:'45px'
    }}>Flats Details</p>
    <Button style={{
        margin:'20px',
        borderRadius:'20%',
        backgroundColor:'#A64B2A'
    }}
    onClick={()=>{navigate('/adminCheck')}}
    >Manager Login</Button> 
    
    
    <Button style={{
        margin:'20px',
        borderRadius:'20%'
    }}
    onClick={()=>{a()}}
    >Sort by flat no.</Button> 
    <input placeholder='Search Bilding Name' type={'text'} value={inpu} onChange={(e)=>{set(e.target.value)}} style={{
        margin:'5px',
        border:'1px solid black',
        borderRadius:'6px'
    }}/>
    <Button style={{
        margin:'0px',
        borderRadius:'20%'
    }}
    onClick={()=>{r()}}
    >Search</Button> 



    <Maindiv>
    {
        user.map((e)=>{
            return <Div key={e._id}>
            <Img src={e.image}></Img>
            <P>Bilding Name: {e.bildingNumber}</P>
            <P>City: {e.city}</P>
            <P>Block Number: {e.blockNumber}</P>
            <P>Flat number: {e.flat_number}</P>
            <Button style={{
                marginLeft:'38%',
                marginTop:'10px'
            }} onClick={()=>s(e)}>Details</Button>
            </Div>
        })
    }
    </Maindiv>

    <Space></Space>
    </>
}