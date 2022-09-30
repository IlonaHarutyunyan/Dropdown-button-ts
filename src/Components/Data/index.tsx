export interface DataProps{
    category: string;
    description: string;
    id:number;
    image:string;
    price:number;
    rating: {
        count:number;
        rate:number;
    }
    title:string;

}

export const getData = (setData: React.Dispatch<React.SetStateAction<never[]>>) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  