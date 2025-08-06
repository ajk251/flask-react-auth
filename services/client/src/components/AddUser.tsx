
import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Heading } from "@chakra-ui/react";

import axios from "axios";


interface UserObject {
    username: string;
    email: string;
}

interface AddUserProps {
    addUserToList: (user: UserObject) => void;
}


const AddUser: React.FC<AddUserProps> = ({ addUserToList }) => {
    
  const [userData, setUserData] = useState<UserObject>({ username: "", email: "", });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value, });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_SERVICE_URL}/users`, userData );

      if (response.status === 201) { console.log(response.data.message);

        // Manually construct the new user object
        const newUser = { username: userData.username, email: userData.email, created_date: new Date().toISOString(),  };

        // Add the new user to the state in App.tsx
        addUserToList(newUser);

        // Reset the form
        setUserData({ username: "", email: "" });
      }
    } catch (error) {
      console.error("There was an error registering the user:", error);
    }
  };

  return (
    <Box p={4} maxW="1200px" mx="auto" mt={12}>
      <Box mb={6} textAlign="left">
        <Heading as="h2" size="xl" color="gray.700">
          Register a User
        </Heading>
      </Box>

      <Box  as="form"  p={4}  borderWidth={1}  borderRadius="lg" boxShadow="lg"  maxW="500px"  onSubmit={handleSubmit} textAlign="left">
        <FormControl isRequired mb={6}>
          <FormLabel fontSize="lg" htmlFor="input-username">
            Username
          </FormLabel>
          <Input name="username" id="input-username" size="lg" placeholder="Enter a username"  type="text" value={userData.username} onChange={handleInputChange} />
        </FormControl>

        <FormControl isRequired mb={6}>
          <FormLabel fontSize="lg" htmlFor="input-email">
            Email
          </FormLabel>
          <Input name="email" id="input-email" size="lg" type="email" placeholder="Enter an email address" value={userData.email} onChange={handleInputChange}/>
        </FormControl>

        <Button  type="submit" colorScheme="green" bg="green.400" size="lg" width="full">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default AddUser;