import {React} from "react";
import {
  FormLabel,
  Input,
  Box,
  Flex,
  Button,
  Text,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import style from "./Signup.module.css";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin_request } from "../redux/actionTypes";

export default function Signup() {
  let [theme, setTheme] = useState(false);
  let [passwordVisible, setPasswordVisible] = useState(false);
  let toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth_state = useSelector((store) => store.auth);
  let [loginCred, setLoginCred] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const hendleChange = (e) => {
    const { name, value } = e.target;
    setLoginCred({ ...loginCred, [name]: value });
  };
  function hendleSubmit() {
    dispatch(UserLogin_request(loginCred))
      .then((res) =>
        res.type === "Singin_sucess"
          ? navigate("/login")
          : toast({
              title: "Ragistretion Fail",
              description: "Try to ragister again",
              status: "error",
              duration: 2000,
              isClosable: true,
              position: "top",
            })
      )
      .catch((err) =>
        toast({
          title: "Ragistretion Fail",
          description: "Try to ragister again",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        })
      );

    // console.log(auth_state)
  }
  console.log(auth_state);

  // --------------------------------------------------
  return (
    <>
      {auth_state.auth_load ? (
        <div>
          <Text className={style.loading}>Please wait....</Text>
        </div>
      ) : (
        ""
      )}
      <Box
        w={"355px"}
        h="540px"
        mx={"auto"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      >
        <Box
          w="355px"
          h="540px"
          m={"auto"}
          borderRadius="5px"
          alignItems="center"
          bgColor={theme ? "blackAlpha.900" : "whiteAlpha.50"}
          color={theme ? "whiteAlpha.900" : "blackAlpha.900"}
        >
          <Flex justify={"center"} ml="80px">
            <Text fontSize="15px" color="#84C225" fontWeight={"700"} m="20px">
              SIGN UP
            </Text>

            <IconButton
              bgColor={"#84C225"}
              aria-label="toggle theme"
              rounded="full"
              size="xs"
              mt={"20px"}
              ml="50px"
              onClick={() => setTheme(!theme)}
              icon={theme ? <FaSun color="black" /> : <FaMoon />}
            />
          </Flex>

          <Flex h={"400px"} flexDirection="column" justify="space-between">
            <Flex flexDirection="column" justify="space-between">
              <Flex
                w={"100%"}
                px="10px"
                justify={"space-around"}
                align="center"
              >
                <Box>
                  <FormLabel mt={"15px"}>FirstName</FormLabel>
                  <Input
                    variant={"flushed"}
                    borderBottom="2px solid"
                    type="text"
                    h={"40px"}
                    w="132px"
                    name="firstname"
                    onChange={(e) => hendleChange(e)}
                  />
                </Box>
                <Box>
                  <FormLabel mt={"15px"}>LastName</FormLabel>
                  <Input
                    variant={"flushed"}
                    borderBottom="2px solid"
                    type="text"
                    h={"40px"}
                    w="132px"
                    name="lastname"
                    onChange={(e) => hendleChange(e)}
                  />
                </Box>
              </Flex>

              <Flex
                w={"100%"}
                flexDirection="column"
                justify="space-between"
                align={"center"}
              >
                <Box>
                  <FormLabel mt={"15px"}>Enter Email</FormLabel>
                  <Input
                    variant={"flushed"}
                    borderBottom="2px solid"
                    type="email"
                    h={"40px"}
                    w="295px"
                    name="email"
                    onChange={(e) => hendleChange(e)}
                  />
                </Box>
                <Box>
                  <Flex>
                    <Box>
                      <FormLabel mt={"15px"}>Enter Password</FormLabel>
                      <Input
                        variant={"flushed"}
                        borderBottom="2px solid"
                        type={passwordVisible ? "text" : "password"}
                        h={"40px"}
                        w="280px"
                        name="password"
                        onChange={(e) => hendleChange(e)}
                      />
                    </Box>
                    <Box display="flex" flexDirection="column-reverse">
                      <Text
                        pb="10px"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        <IconButton
                          bgColor={"#84C225"}
                          aria-label="Call Segun"
                          size="xs"
                          icon={
                            passwordVisible ? (
                              <RiEyeFill color="black" />
                            ) : (
                              <RiEyeCloseFill color="black" />
                            )
                          }
                        />
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Flex>

            <Flex
              h={"60px"}
              w="100%"
              flexDirection="column"
              align={"center"}
              justify="end"
            >
              <Flex w="100%">
                <Text ml={"30px"} mb="5px" as="sup">
                  Already a member?{" "}
                </Text>
              </Flex>
              <Flex
                flexDirection={"row"}
                w="295px"
                justifyContent="space-between"
              >
                <Box>
                  <Link to={"/login"}>
                    <Button
                      colorScheme="blue"
                      w={"85px"}
                      h="40px"
                      border="none"
                      borderRadius={"5px"}
                      color={"white"}
                    >
                      Login
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Button
                    bgColor={"#84C225"}
                    _hover={{
                      bgColor: "#5e9112",
                    }}
                    w={"200px"}
                    h="40px"
                    border="none"
                    borderRadius={"5px"}
                    color={"white"}
                    onClick={hendleSubmit}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Text fontSize="xs" m={"10px 15px"} align="center">
            By continuing, I accept TCP-bigbasket’s Terms and Conditions and
            Privacy Policy.
          </Text>
        </Box>
      </Box>
    </>
  );
}
