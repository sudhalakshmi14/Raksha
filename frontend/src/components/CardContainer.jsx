export default function CardContainer({ children }) {
  return (
    <div className="page-bg">
      <div className="card-box">
        {children}
      </div>
    </div>
  

  );
}
