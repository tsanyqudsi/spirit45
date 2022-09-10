import * as React from 'react';
import { map } from 'lodash';
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  AccordionProps,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Row } from '@components';
import { jobs } from '@store';

interface JobProps extends AccordionProps {
  position: string;
  location: string;
  responsibilities: string[];
  qualifications: string[];
  index: number;
}

const jobOpportunities: { [key: string]: any } = map(
  jobs,
  (value: { [key: string]: any }) => {
    return value.default;
  }
);

const Job = (props: JobProps): JSX.Element => {
  const {
    index,
    position,
    location,
    responsibilities,
    qualifications,
    ...attr
  } = props;
  return (
    <Accordion {...attr}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`panel${index}bh-content`}
        id={`panel${index}bh-header`}
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>{position}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>{location}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Requirements</Typography>
        <ul>
          {responsibilities.map((responsibility, index) => {
            return (
              <li key={`requirements-${position}-${index}`}>
                {responsibility}
              </li>
            );
          })}
        </ul>
        <Typography>Qualifications</Typography>
        <ul>
          {qualifications.map((qualification, index) => {
            return (
              <li key={`qualifications-${position}-${index}`}>
                {qualification}
              </li>
            );
          })}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export const Jobs = (): JSX.Element => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  if (jobOpportunities.length > 0)
    return (
      <Row marginY='4rem' id={'jobOpportunities'}>
        {jobOpportunities.map((value: JobProps, index: number) => {
          return (
            <Job
              key={`career-${index}`}
              {...value}
              onChange={handleChange(`panel${index}`)}
              expanded={expanded === `panel${index}`}
            />
          );
        })}
      </Row>
    );
  return <div></div>;
};
