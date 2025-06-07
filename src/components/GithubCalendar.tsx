import GitHubCalendar from 'react-github-calendar';

export default function GithubCalendar() {
  return (
    <div className="flex justify-center items-center">
      <GitHubCalendar
        username="munna-yadav"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </div>
  );
}
