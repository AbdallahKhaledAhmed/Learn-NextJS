import Link from "next/link";

interface TeamProps {}

export default function Team(props: TeamProps) {
  return (
    <div>
      <p>Team</p>
      <Link href="./salaries">Go to Team Salaries</Link>
    </div>
  );
}
