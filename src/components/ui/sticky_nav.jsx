import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import { navBtns } from "../text_flavors/content";

export default function StickyNav(){
    
    return(
      <NavigationMenu className="bg-gray-100 rounded-md rounded-full border sticky top-5 ml-auto mr-auto shadow-lg">
        <NavigationMenuList>
          <NavigationMenuItem className = "flex flex-row align-middle">
            <FontAwesomeIcon icon={faRecycle} className="w-7 m-2"/>
            <p className="text-xl mt-auto mb-auto p-3 font-bold mr-100">CCIN</p>
          </NavigationMenuItem>
          {
            navBtns.map((item,key) => {
              return(
              <NavigationMenuItem key = {key + 3}>
                <h2 className="font-normal text-sm pl-5 pr-5 pt-2.5 pb-2.5 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md" key = {key + 3}>{item}</h2>
              </NavigationMenuItem>
              )
            })
          }
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-gray-50 m-2">Contact Us</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
}