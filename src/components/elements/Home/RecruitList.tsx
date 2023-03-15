import { Loading } from "@/components/pages/Loading";
import { useRecruit } from "@/hooks/useRecruit";
import { RecruitCard } from "../commons/cards/RecruitCard";

export const RecruitList = (): JSX.Element => {
  const { recruits } = useRecruit();

  // change order of recruits by timestamp (newest first)
  recruits.sort((a, b) => {
    if (a.timestamp < b.timestamp) {
      return 1;
    } else {
      return -1;
    }
  });

  console.log(recruits);

  if (recruits.length < 0) return <Loading />;

  return (
    <div className="grid mx-20 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {recruits.map((recruit, index) => (
        <RecruitCard
          key={recruit.timestamp}
          recruit={recruit}
          index={index}
          allRecruits={recruits}
        />
      ))}
    </div>
  );
};
