import FastfoodIcon from '@mui/icons-material/Fastfood';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { RecipeCalculated } from '@/types';

type Props = {
    recipe: RecipeCalculated;
}

const RecipeCard = ({ recipe }: Props): JSX.Element => {
    return (
        <Card className="m-2">
            <CardActionArea className={`grayscale${recipe.complete ? '-0' : ''}`} disabled={!recipe.complete}>
                <CardMedia className='w-1/10'>
                    <FastfoodIcon className="mb-0 mt-4 ml-3 p-0.5 bg-teal-600 fill-white" />
                </ CardMedia>
                <CardContent>
                    <div className="flex justify-between">
                        <Typography variant="h6" component="div">
                            {recipe.name}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            {`€ ${recipe.totalPrice ? recipe.totalPrice.toFixed(1) : '-'}`}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default RecipeCard