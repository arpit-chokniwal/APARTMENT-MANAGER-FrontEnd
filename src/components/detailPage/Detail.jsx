import styled from 'styled-components'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router";



const Div = styled.div`
border: 0px solid black;
height: 850px;
width: 50%;
margin: auto;
margin-top: 10px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
border-radius: 50px;
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
height: 45%;
border-radius: 10%;

`
const P = styled.p`
margin-top: 5px;
font-weight: bold;
text-align: left;
margin-left: 50px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 28px;
`



export const Detail = () =>{
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id)
    const [e,sete] = useState({})
    useEffect(()=>{
        axios.get(`https://recgf.herokuapp.com/user/${id}`).then((res)=>{
            sete(res.data)
        })
    },[])

    return <>
    <p style={{
        marginTop:'10px',
        marginBottom:'0px',
        fontWeight:'bold',
        textAlign:'center',
        fontFamily:'initial',
        fontSize:'45px'
    }}>Flat Details</p>
    <Button style={{
        margin:'20px',
        borderRadius:'20%'
    }}
    onClick={()=>{navigate('/')}}
    >Home</Button> 
    

    {
        <Div>
        <Img src={e.image}></Img>
        <P>Bilding Name: {e.bildingNumber}</P>
        <P>City: {e.city}</P>
        <P>Block Number: {e.blockNumber}</P>
        <P>Flat number: {e.flat_number}</P>
        <P>Name of Resident: {e.name}</P>
        <P>Gender of Resident: {e.gender}</P>
        <P>Age: {e.age}</P>
        <P>Type of Owner: {e.typeOfOwner}</P>



        <Button style={{
            marginTop:'3%',
            marginLeft:'42%',
            borderRadius:'20%'
        }}
        onClick={()=>{navigate('/')}}
        >Home</Button> 
        </Div>

    }

    <Space></Space>
    </>
}