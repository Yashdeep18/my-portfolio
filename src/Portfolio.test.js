import { render, screen, within } from '@testing-library/react';
import Portfolio from './Portfolio';

const RESUME_URL =
  'https://drive.google.com/file/d/16yiFRACisMZ8BzxZ7v6eCBt9NwSuiAUc/view?usp=sharing';

const PROJECTS = [
  ['Bank Loan Finance Analysis', 'https://github.com/Yashdeep18/Bank-loan-finance-analysis'],
  [
    'Sales Analysis Dashboard (Power BI)',
    'https://github.com/Yashdeep18/Superstore-Sales-Analysis---Power-BI-Project',
  ],
  ['Mental Health Tracker (MindMate)', 'https://github.com/Yashdeep18/MentalHealthTracker'],
  ['AI Virtual Assistant (Voice Assistant)', 'https://github.com/Yashdeep18/AI-Voice-Assistant'],
  ['House Price Predictor', 'https://github.com/Yashdeep18/House-Price-Predictor'],
  ['Digital Attendance System (OpenCV)', 'https://github.com/Yashdeep18/Digital-Attendance-system'],
];

beforeEach(() => {
  render(<Portfolio />);
});

test('renders every top level section', () => {
  ['hero', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'].forEach((id) => {
    expect(document.getElementById(id)).not.toBeNull();
  });
});

test('exposes the resume in the navbar, hero and contact section', () => {
  const resumeLinks = screen.getAllByRole('link', { name: /resume/i });

  expect(resumeLinks.map((link) => link.textContent)).toEqual([
    'Preview Resume',
    'View Resume',
    'Open Resume (PDF)',
  ]);
  resumeLinks.forEach((link) => {
    expect(link).toHaveAttribute('href', RESUME_URL);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link.getAttribute('rel')).toMatch(/noreferrer/);
  });
});

test('renders the skill categories', () => {
  [
    'Core Data & BI',
    'Programming, Modeling & ETL',
    'Tools & Platforms',
    'Soft Skills & Domain',
  ].forEach((category) => {
    expect(screen.getByRole('heading', { name: category })).toBeInTheDocument();
  });
});

test('renders each experience entry with its period', () => {
  [
    ['Data Analyst - Khola Eng.', /July 2025 - Dec 2025/],
    ['MIS Executive - LEVREDO', /Apr 2024 - May 2025/],
    ['Python Developer Intern - MirrorSoft Technology', /Jan 2022 - Feb 2022/],
  ].forEach(([title, period]) => {
    const heading = screen.getByRole('heading', { name: title });
    expect(within(heading.parentElement).getByText(period)).toBeInTheDocument();
  });
});

test('renders one card per project, each linking to its repository', () => {
  const projectLinks = screen.getAllByRole('link', { name: /view on github/i });

  expect(projectLinks).toHaveLength(PROJECTS.length);
  PROJECTS.forEach(([title, url], index) => {
    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    expect(projectLinks[index]).toHaveAttribute('href', url);
    expect(projectLinks[index]).toHaveAttribute('target', '_blank');
  });
});

test('links the achievement certificate', () => {
  expect(screen.getByRole('link', { name: /view certificate/i })).toHaveAttribute(
    'href',
    'https://drive.google.com/file/d/1Xb0bv5O6P0Oh1i4N5NudKpik7dcSFtal/view'
  );
});

test('renders the contact details', () => {
  expect(screen.getByText(/Location: India/)).toBeInTheDocument();
  expect(screen.getByText(/Phone: 8272805743/)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /yashyadav365636@gmail.com/ })).toHaveAttribute(
    'href',
    'mailto:yashyadav365636@gmail.com'
  );
  expect(screen.getByRole('link', { name: /github\.com\/Yashdeep18/ })).toHaveAttribute(
    'href',
    'https://github.com/Yashdeep18'
  );
  expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/yashdeep-yadav-468411243/'
  );
});
