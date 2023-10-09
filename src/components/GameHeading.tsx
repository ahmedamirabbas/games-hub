import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
  gameeQuery: GameQuery;
}

const GameHeading = ({ gameeQuery }: Props) => {
  //Games
  // Action Games
  // Xbox Games
  // Xbox Action Games

  const heading = `${gameeQuery.platform?.name || ''} ${
    gameeQuery.genre?.name || ''
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
