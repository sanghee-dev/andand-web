import styled from "styled-components";

interface IProps {
  createdAt: string | undefined;
}

const CreatedDate = styled.h4`
  text-transform: uppercase;
  color: ${(props) => props.theme.fontGray};
`;

function CreatedAt({ createdAt = "" }: IProps) {
  const now = new Date();
  const date = new Date(+createdAt);

  const elapsedMSec = now.getTime() - date.getTime();
  const elapsedSec = elapsedMSec / 1000;
  const elapsedMin = Math.floor(elapsedMSec / 1000 / 60);
  const elapsedHour = Math.floor(elapsedMSec / 1000 / 60 / 60);
  const elapsedDay = Math.floor(elapsedMSec / 1000 / 60 / 60 / 24);
  const elapsedMonth = Math.floor(elapsedMSec / 1000 / 60 / 60 / 24 / 30);
  const elapsedYear = Math.floor(elapsedMSec / 1000 / 60 / 60 / 24 / 30 / 12);

  return (
    <CreatedDate>
      <span>
        {elapsedYear !== 0
          ? `${elapsedYear} ${elapsedYear > 1 ? "years" : "year"} ago`
          : elapsedMonth !== 0
          ? `${elapsedMonth} ${elapsedMonth > 1 ? "months" : "month"} ago`
          : elapsedDay !== 0
          ? `${elapsedDay} ${elapsedDay > 1 ? "days" : "day"} ago`
          : elapsedHour !== 0
          ? `${elapsedHour} ${elapsedHour > 1 ? "hours" : "hour"} ago`
          : elapsedMin !== 0
          ? `${elapsedMin} ${elapsedMin > 1 ? "minutes" : "minute"} ago`
          : elapsedSec !== 0
          ? `${elapsedSec} ${elapsedSec > 1 ? "seconds" : "second"} ago`
          : 0}
      </span>
    </CreatedDate>
  );
}

export default CreatedAt;
