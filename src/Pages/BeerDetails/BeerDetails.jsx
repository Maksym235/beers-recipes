import { AiOutlineArrowLeft } from "react-icons/ai";
import { useParams } from "react-router-dom";
import {
  Main,
  Section,
  GoBack,
  Name,
  Text,
  List,
  Item,
  Wrapp,
  IngrList,
  IngrItem,
  Conteiner,
  IncideText,
  Span,
} from "./BeerDetails.styled";
import { useEffect } from "react";
import { useSingeBeer } from "./store";
const BeerDetails = () => {
  const { id } = useParams();
  const backLinkHref = location.state?.from ?? "/";
  const { getBeer, beer } = useSingeBeer((state) => ({
    getBeer: state.getBeerById,
    beer: state.beer,
  }));
  console.log(beer);
  console.log(beer.ingredients);
  console.log(beer.method);

  useEffect(() => {
    getBeer(id);
  }, [getBeer, id]);

  return (
    <>
      {beer && beer.ingredients && beer.method && (
        <Main>
          <GoBack to={backLinkHref}>
            <AiOutlineArrowLeft />
            Go back
          </GoBack>
          <Section>
            <img
              src={beer.image_url}
              alt="beer photo"
              width="150px"
              height="450px"
            />
            <Name>{beer.name}</Name>
            <Text>{beer.tagline}</Text>
          </Section>
          <Wrapp>
            Description:
            <Text>{beer.description}</Text>
          </Wrapp>
          <div>
            <List>
              <Item>abv: {beer.abv}</Item>
              <Item>ebc: {beer.ebc}</Item>
              <Item>ibu: {beer.ibu}</Item>
              <Item>ph: {beer.ph}</Item>
              <Item>srm: {beer.srm}</Item>
            </List>
          </div>
          <Wrapp>
            Ingridients:
            <Conteiner>
              hops:
              <IngrList>
                {beer.ingredients.hops.map(
                  ({ name, add, amount: { value, unit }, attribute }) => (
                    <IngrItem key={name}>
                      <IncideText>
                        name: <Span>{name}</Span>
                      </IncideText>
                      <IncideText>
                        add: <Span>{add}</Span>
                      </IncideText>
                      <IncideText>
                        amout:
                        <Span>
                          {value}
                          {unit}
                        </Span>
                      </IncideText>
                      <IncideText>
                        attribute: <Span>{attribute}</Span>
                      </IncideText>
                    </IngrItem>
                  )
                )}
              </IngrList>
            </Conteiner>
            <Conteiner>
              malt:
              <IngrList>
                {beer.ingredients.malt.map(
                  ({ name, amount: { value, unit } }) => (
                    <IngrItem key={name}>
                      <IncideText>
                        name: <Span>{name}</Span>
                      </IncideText>
                      <IncideText>
                        amount:
                        <Span>
                          {value}
                          {unit}
                        </Span>
                      </IncideText>
                    </IngrItem>
                  )
                )}
              </IngrList>
            </Conteiner>
          </Wrapp>
          <Wrapp>
            Fermetation:
            <Conteiner>
              Temp:
              <IngrList>
                <IngrItem>
                  fermentation temp:
                  <Span>
                    {beer.method.fermentation.temp.value}
                    {beer.method.fermentation.temp.unit}
                  </Span>
                </IngrItem>
              </IngrList>
            </Conteiner>
            <Conteiner>
              Mash-Temp:
              <IngrList>
                <IngrItem>
                  Mash-temp:
                  <Span>
                    {beer.method.mash_temp[0].temp.value}
                    {beer.method.mash_temp[0].temp.unit}
                  </Span>
                </IngrItem>
              </IngrList>
            </Conteiner>
          </Wrapp>
        </Main>
      )}
    </>
  );
};

export default BeerDetails;
