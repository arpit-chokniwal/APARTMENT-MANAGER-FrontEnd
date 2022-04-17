import React, { useState } from "react";
import {
  Container,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Flex,
  Input,
} from "@chakra-ui/react";
import axios from 'axios'
import { useNavigate } from "react-router";


function AdminLogin() {

  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://recgf.herokuapp.com/login',userData)
    .then(function (response) {
      alert('Login Succesfulluy')
      setUserData({
        email: "",
        password: "",
      })
      navigate('/addFlat')
    })
    .catch(function (error) {
      alert('Wrong Credentials')
      // console.log(error);
      setUserData({
        password: ""
      })
    });
  };
  return (
    <Container maxW="md">
      <Heading style={{
        marginBottom:'-40px',
        marginLeft:'20%'
      }}>Manager Login</Heading>
      <Flex
        justify="center"
        align="center"
        direction="column"
        textAlign="center"
        borderColor="gray.200"
        borderRadius="10px"
        overflow={"hidden"}
        marginTop="50"
        boxShadow={
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        }
      >
        <FormControl w="100%" borderRadius="lg" p={"3"} cursor="pointer" mt={5}>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="Enter email"
            onChange={onChangeInput}
            autoComplete={"off"}
            value={userData.email}
          />
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            onChange={onChangeInput}
            type="password"
            placeholder="Enter password"
            value={userData.password}
          />
          <Button
            w="50%"
            mt={4}
            colorScheme="blue"
            type="submit"
            style={{
              backgroundColor:'#dda15e'
            }}
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </Button>
        </FormControl>
      </Flex>
    </Container>
  );
}

export default AdminLogin;