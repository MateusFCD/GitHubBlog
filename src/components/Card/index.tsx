import { CardBox, CardContainer } from "./styles";

interface CardProps {
  title: string;
  paragraphy: string;
  date: string;
  id: number;
}

export function Card({ title, paragraphy, date }: CardProps) {
  return (
    <CardContainer>
      <CardBox>
        <h1>{title}</h1>
        <span>{date}</span>
      </CardBox>
      <CardBox>
        <p>{paragraphy}</p>
      </CardBox>
    </CardContainer>
  );
}
