
import { Heading, Box, Divider, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

interface User {
    created_date: string;
    email: string;
    id: number;
    username: string;
}

interface UsersProps {
    users: User[];
}

const Users = ({ users }: UsersProps) => {

    //   ,{id: 3, username: "megan-the-hot-stuff", email: "nice-zucchini@exampple.com", created_date: "2024-08-03"}
    
    return (
    <Box p={4} maxW="1200px" mx="auto">
        <Heading as="h1" size="2x1" mb={6} mt={12} textAlign="left" color="gray.700">Users</Heading>
        <Divider borderColor="gray.400" />
        <Table variant="simple" mt={4}>
            <Thead>
                <Tr><Th>Username</Th><Th>Email</Th><Th>Created Date</Th></Tr>
            </Thead>
            <Tbody>
                {users.map((user) => (
                    <Tr key={user.username}><Td>{user.username}</Td><Td>{user.email}</Td><Td>{user.created_date}</Td></Tr>))}
            </Tbody>
        </Table>
    </Box>
)}

export default Users;