import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cardInfo } from "@/components/text_flavors/content";

export default function CardDesc(){
    return(
      <>
              {cardInfo.map((item,key) => {
            return(
              <Card key = {key + 1} className="h-75 shadow-xl">
                <CardHeader key={key + 4}>
                  <CardTitle key = {key + 5} className="rounded-full bg-gray-300"><p className="p-1 ml-2 text-sm uppercase font-bold">{item.header}</p></CardTitle>
                </CardHeader>
                <CardContent className="align-middle">
                  <h1 className="font-bold uppercase" key = {key + 10}>{item.title}</h1>
                  <p className="text-xs text-neutral-400 mt-2 mb-2" key = {key + 20}>{item.dsec}</p>
                  <ul className="list-disc marker:text-gray-300 ml-6" key = {key + 50}>
                    {item.info_pts.map((list_item,info_key) => {
                      return(
                        <li key = {info_key + 6}>
                          {list_item}
                        </li>
                      )
                    })}
                  </ul>
                  <Button className="bg-gray-200 text-black-500 m-5 text-lg"><p className="p-5">Learn More</p></Button>
                </CardContent>
              </Card>
            )
          })}
      </>
    )
}