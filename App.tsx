import Navigation from "./navigation";
import {useColorScheme} from "react-native";

export default function App() {
  const colorScheme = useColorScheme()
  return(
      <Navigation colorScheme={colorScheme}/>
  )
}

