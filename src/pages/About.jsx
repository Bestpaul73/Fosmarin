import PageHero from '../components/PageHero';
import ProjectOverview from '../components/ProjectOverview';
import MissionVision from '../components/MissionVision';
import ProjectObjectives from '../components/ProjectObjectives';
import ProjectImpact from '../components/ProjectImpact';
import EUFunding from '../components/EUFunding';
import ConsortiumGlance from '../components/ConsortiumGlance';

function About({ page }) {
  return (
    <>
      <PageHero
        eyebrow='About Fosmarin'
        title='A European project for safer, more resilient subsea infrastructure.'
        intro='FOSMARIN is an EU-funded initiative developing and validating a real-time monitoring and threat-assessment system for subsea infrastructure, combining Fibre Optic Acoustic Sensing (FOAS), predictive analytics and external data sources.'
      />

      {page.sections.map((section) => {
        switch (section.id) {
          case 'project-overview':
            return <ProjectOverview id={section.id} key={section.id} />;

          case 'mission-and-vision':
            return <MissionVision id={section.id} key={section.id} />;

          case 'objectives':
            return <ProjectObjectives id={section.id} key={section.id} />;

          case 'impact':
            return <ProjectImpact id={section.id} key={section.id} />;

          case 'eu-funding':
            return <EUFunding id={section.id} key={section.id} />;

          case 'consortium-at-a-glance':
            return <ConsortiumGlance id={section.id} key={section.id} />;

          default:
            return null;
        }
      })}
    </>
  );
}

export default About;
