import GitHubCalendar from 'react-github-calendar';

export default function GithubCalendar() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-4">GitHub Contributions</h2>

      <div className="overflow-x-auto pb-4">
        <div className="min-w-fit">
          <GitHubCalendar
            username="munna-yadav"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            hideColorLegend
          />
        </div>
      </div>
    </div>
  );
}
