import * as React from 'react';
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
import { grey } from '@mui/material/colors';

interface JobProps extends Omit<AccordionProps, 'children'> {
  position: string;
  location: string;
  responsibilities: string[];
  qualifications: string[];
  index: number;
}

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
    <Accordion {...attr} sx={{ width: '100%', backgroundColor: grey[900] }}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`panel${index}bh-content`}
        id={`panel${index}bh-header`}
      >
        <Typography sx={{ color: 'white', flexGrow: 1 }}>{position}</Typography>
        <Typography sx={{ color: 'white', marginRight: '2rem' }}>
          {location}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color={'white'}>Requirements</Typography>
        <ul>
          {responsibilities.map((responsibility, index) => {
            return (
              <li key={`requirements-${position}-${index}`}>
                {responsibility}
              </li>
            );
          })}
        </ul>
        <Typography color={'white'}>Qualifications</Typography>
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

  if (jobs.length > 0)
    return (
      <Row
        marginY='4rem'
        marginX={['1rem', '5rem']}
        id={'jobOpportunities'}
        flexDirection='column'
        justifyContent={'flex-start'}
      >
        {jobs.map((value, index: number) => {
          if (value.isOpen === true)
            return (
              <Job
                key={`career-${index}`}
                responsibilities={value.responsibilities}
                qualifications={value.qualifications}
                position={value.position}
                location={value.location}
                index={index}
                onChange={handleChange(`panel${index}`)}
                expanded={expanded === `panel${index}`}
              />
            );
          return <></>;
        })}
      </Row>
    );
  return <div></div>;
};
