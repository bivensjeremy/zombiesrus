import { FaFaceDizzy, FaHeartCrack, FaSkull } from "react-icons/fa6";
import { Card, CardBody, CardHeader } from "@heroui/card";

const Features = () => {
	const points = [
		{
			icon: FaSkull,
			title: "A Friend for Life",
			text: "Zombies will never leave you. They will always want your brains.",
		},
		{
			icon: FaHeartCrack,
			title: "Unhealthy Variety",
			text: "We have an awesome catalogue of brain eaters to suit you needs.",
		},
		{
			icon: FaFaceDizzy,
			title: "Money-Back Guarantee",
			text: "Your money back if your zombie does not try to eat you.",
		},
	];

	return (
		<section className="bg-slate-50 py-16 relative dark:bg-slate-900">
            <div className="max-w-7xl mx-auto">
                <div className="">
                    <div className="grid md:grid-cols-3 px-3 md:px-0">
                        {points.map(({ title, text, icon: Icon }, index) => (
                        <Card key={index} className="p-2 bg-slate-50 dark:bg-slate-900" shadow="none">
                            <CardHeader>
                                <Icon size={72} className="m-auto mt-2 text-primary" />
                            </CardHeader>

                            <CardBody>
                                <h3 className="text-2xl font-semibold text-center min-h-12 leading-tight">{title}</h3>
                                <p className="mt-2 text-base text-center">{text}</p>
                            </CardBody>
                        </Card>
                    ))}
                    </div>
                </div>
            </div>
		</section>
	);
}

export default Features;