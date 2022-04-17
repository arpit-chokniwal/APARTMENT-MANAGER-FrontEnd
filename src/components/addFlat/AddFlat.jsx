import React, { useState } from "react";
import {
  Container,
  Spacer,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Flex,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import axios from 'axios'

function AddFlat() {  


  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    image: "",
    flat_number: "",
    bildingNumber: "",
    blockNumber: "",  
    city: "",
    name: "",
    gender: "",
    age: "",
    typeOfOwner: "",
    numberOfPeople: "",
  });

  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://recgf.herokuapp.com/user',userData).then((res)=>{
      alert('User Added')
      // console.log(userData);
      setUserData({
        image: "",
        flat_number: "",
        bildingNumber: "",
        blockNumber: "",  
        city: "",
        name: "",
        gender: "",
        age: "",
        typeOfOwner: "",
        numberOfPeople: "",
      })
    })
   
  };
  return (<>
    <button style={{
      backgroundColor:'#dda15e',
      padding:'10px 20px',
      margin:'20px',
      borderRadius:'20%'
  }}
  onClick={()=>{navigate('/')}}
  >Home</button> 
    <Container maxW="container.sm">
    <Heading style={{
      marginBottom:'-20px',
      marginLeft:'29%'
    }}>Add Resident</Heading>
      <FormControl
        w="100%"
        p={"3"}
        cursor="pointer"
        mt={5}
        borderColor="gray.200"
        borderRadius="10px"
        overflow={"hidden"}
        marginTop="10"
        boxShadow={
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        }
      >
        <Flex justify="space-between" flexWrap="wrap" gap="5">

          <Flex
            justify="space-between"
            align="left"
            direction="column"
            textAlign="center"
          >
          
          <FormLabel htmlFor="image">Image</FormLabel>
            <Input
              id="image"
              onChange={(e) => onChangeInput(e)}
              type="text"
              placeholder="Paste image url"
              value={userData.image}
            />
            <FormLabel htmlFor="flatnumber">Flat number</FormLabel>
            <Input
              id="flat_number"
              onChange={(e) => onChangeInput(e)}
              type="text"
              placeholder="Enter flat number"
              value={userData.flat_number}
            />
            <FormLabel htmlFor="bildingNumber">Bilding Name</FormLabel>
            <Input
              type="text"
              id="bildingNumber"
              placeholder="Enter Bilding Name"
              onChange={(e) => onChangeInput(e)}
              autoComplete={"off"}
              value={userData.bildingNumber}
            />
            <FormLabel htmlFor="blockNumber">Block Number</FormLabel>
            <Input
              type="text"
              id="blockNumber"
              placeholder="Enter Block Number"
              onChange={(e) => onChangeInput(e)}
              autoComplete={"off"}
              value={userData.blockNumber}
            />
            
            <FormLabel htmlFor="city">City</FormLabel>
            <Input
              id="city"
              type="text"
              onChange={(e) => onChangeInput(e)}
              placeholder="Enter city"
              value={userData.city}
            />
            
           
          </Flex>

          <Spacer />

          <Flex
          justify="space-between"
          align="left"
          direction="column"
          textAlign="center"
        >
        <FormLabel htmlFor="image">Name of Resident</FormLabel>
          <Input
            id="name"
            onChange={(e) => onChangeInput(e)}
            type="text"
            placeholder="Name of Resident"
            value={userData.name}
          />
          <FormLabel htmlFor="GenderofResident">Gender of Resident</FormLabel>
          <Select
            id="gender"
            onChange={(e) => onChangeInput(e)}
            placeholder="Select Gender"
            value={userData.gender}
          >
          <option value="Femail">Female</option>
          <option value="Mail">Male</option>
            <option value="Other">Other</option>
          </Select>
          <FormLabel htmlFor="city">Age</FormLabel>
          <Input
            id="age"
            type="number"
            onChange={(e) => onChangeInput(e)}
            placeholder="Enter age"
            value={userData.age}
          />
          
          
          
          <FormLabel htmlFor="type of owner">Type of Owner</FormLabel>
          <Input
            id="typeOfOwner"
            onChange={(e) => onChangeInput(e)}
            type="text"
            placeholder="Enter Address"
            value={userData.typeOfOwner}
          />


          <FormLabel htmlFor="NumberOfResident">Number of People Live</FormLabel>
          <Input
            type="text"
            id="numberOfPeople"
            placeholder="Enter Number of Resident"
            onChange={(e) => onChangeInput(e)}
            autoComplete={"off"}
            value={userData.numberOfPeople}
          />


        </Flex>




        </Flex>
        <Button
          w="50%"
          mt={5}
          onClick={(e) => handleSubmit(e)}
          type="submit"
          style={{
            marginLeft:'23%',
            backgroundColor:'#dda15e'
          }}
        >
          Submit
        </Button>
      </FormControl>
    </Container>
    </>
  );
}

export default AddFlat;