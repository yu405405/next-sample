import { useRouter } from 'next/router';
import Button from '@/components/button';

const Member = () => {
  const router = useRouter();
  const { member_id } = router.query;

  return (
    <div>
        <h1>Member Id: {member_id}</h1>
        <Button></Button>
        <Button></Button>
        <p>親要素は一個にしよう！</p>
    </div>
  );
};

export default Member;