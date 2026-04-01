// VagaroBooking.tsx
const VagaroBooking = () => {
  return (
    <div 
      className="vagaro" 
      style={{ 
        width: '250px', 
        padding: 0, 
        border: 0, 
        margin: '20px auto', 
        textAlign: 'center' 
      }}
    >
      {/* Сюда Vagaro вставит свою кнопку сама, если скрипт в index.html активен */}
      <a href="https://www.vagaro.com/pro/" >Powered by Vagaro</a>
    </div>
  );
};

export default VagaroBooking;