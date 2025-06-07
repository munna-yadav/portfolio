import GitHubCalendar from 'react-github-calendar';

export default function GithubCalendar() {
  return (
    <>
     <h2 className="text-3xl font-bold mb-4">GitHub Contributions</h2>

     <div className="flex justify-center items-center">
      <GitHubCalendar
        username="munna-yadav"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </div>
    </>
   
  );
}
