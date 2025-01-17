import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function StudentPage() {
  const navigate = useNavigate();
  const [queryParams, setQueryParams] = useSearchParams();
  const { studentName } = useParams();
  const realName = queryParams.get("name");

  return (
    <h2>
      학생 이름은 <span>{studentName}</span> 입니다!
      {realName && (
        <div>
          실제 이름은 <span className="realName">{realName}</span>입니다!!!
        </div>
      )}
      <br />
      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </h2>
  );
}
