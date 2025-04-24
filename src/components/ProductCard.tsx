
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  price: number;
  color: string;
  batteryLife: string;
  features: string[];
  description: string;
}

const ProductCard = ({ name, price, color, batteryLife, features, description }: ProductCardProps) => {
  return (
    <Card className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-3xl font-bold text-purple-500">${price}</p>
          <p className="text-gray-600">{description}</p>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Color: {color}</p>
            <p className="text-sm text-gray-500">Battery: {batteryLife}</p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {features.map((feature, index) => (
              <Badge key={index} variant="secondary">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
