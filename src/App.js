// import "./App.css"
import Header from "./components/Header"
import Body from "./components/Body"
import Social from "./components/Social"
import { Flex, Heading, VStack, Spacer } from "@chakra-ui/layout"
import { IconButton } from "@chakra-ui/button"
import { useColorMode } from "@chakra-ui/color-mode"

import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack p={5}>
      <Flex w="85%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Simer
        </Heading>
        <Spacer />

        <Spacer />
        <IconButton ml={2} icon={<FaInstagram />} isRound="true" />
        <IconButton ml={2} icon={<FaGithub />} isRound="true" />
        <IconButton ml={2} icon={<FaLinkedin />} isRound="true" />
        <IconButton
          ml={8}
          icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        />
      </Flex>
      <Header />
      <Body />
      <Social />
    </VStack>
  )
}

export default App
