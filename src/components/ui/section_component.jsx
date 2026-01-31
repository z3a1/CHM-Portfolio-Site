import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { section_content } from "../text_flavors/content";

function ParseContentBody(content_body){
    let is_bullet_point = Array.isArray(content_body)
    if(is_bullet_point){
        return(
        <>
            {content_body.map((item,key) => {
                return(
                <ul className="list-disc pl-5" key = {key + 4}>
                    <li key = {key + 10}>{item}</li>
                </ul>
                )
            })}
        </>)
    }
    else{
        return(<><p>Text block goes here</p></>)
    }
}

export default function Section(){
    return(
        <>
            {section_content.map((container,section_key) => {
                return(
                    <section id = {container.pos} className="flex flex-row m-5" key = {section_key}>
                        <section id = "content_body" className="w-2/4" key = {section_key + 2}>
                            <section id = "header" className="font-bold uppercase flex flex-col">
                                <p className="w-15 bg-gray-200 rounded-full text-sm text-center p-2">SIDE {container.pos}</p>
                                <p className="text-3xl">{container.header}</p>
                            </section>
                            <section id = "desc">
                            <p>{container.header_desc}</p>
                            </section>
                        </section>
                        <section id = "proposal_body" className="w-1/3">
                            <Card>
                            <CardHeader>
                                <CardTitle><p className="font-bold">{container.card_title}</p></CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{container.sub_header}</p>
                                <hr className="mt-5 mb-5"></hr>
                                <p className="font-bold">{container.content_header}</p>
                                {ParseContentBody(container.content)}
                            </CardContent>
                            </Card>
                        </section>
                        <section id = "Images" className="m-2 bg-gray-100 rounded-md border border-indigo-600">
                            TODO
                        </section>
                    </section>
                )
            })}
        </>
    )
}