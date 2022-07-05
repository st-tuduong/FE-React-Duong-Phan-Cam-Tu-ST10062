import { Link } from "react-router-dom";
import { ICart } from "../../interfaces/cart";

const Header = ({ cart, user }: any) => {
  const numberQuantity = cart.reduce(
    (total: number, item: ICart) => total + item.qty,
    0
  );
  return (
    <header>
      <div className="container">
        <nav className="nav-menu">
          <div className="nav-brand">
            <h1>
              <Link to="/">
                <svg
                  width={42}
                  height={35}
                  viewBox="0 0 42 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.4211 34.8203C19.1691 34.8293 18.9208 34.751 18.711 34.5963C18.5013 34.4417 18.3405 34.2184 18.2511 33.9578L15.3171 25.4457H2.421C2.10292 25.4457 1.78796 25.3764 1.49411 25.2418C1.20027 25.1072 0.933288 24.9099 0.708454 24.6612C0.48362 24.4124 0.305335 24.1172 0.183774 23.7923C0.0622137 23.4673 -0.000235823 23.1191 6.69174e-07 22.7675V2.67818C-0.000119585 2.32577 0.0627081 1.97682 0.184873 1.65131C0.307038 1.3258 0.48615 1.03014 0.711915 0.781322C0.937679 0.5325 1.20565 0.335383 1.50049 0.201308C1.79532 0.0672322 2.11121 -0.00116368 2.43001 1.4978e-05H19.3887C19.6186 4.3594e-06 19.8438 0.072296 20.0379 0.208473C20.232 0.34465 20.387 0.539099 20.4849 0.769056L24.1479 9.37464H38.7747C39.0928 9.37464 39.4077 9.44393 39.7016 9.57854C39.9954 9.71316 40.2624 9.91045 40.4873 10.1592C40.7121 10.4079 40.8904 10.7031 41.0119 11.0281C41.1335 11.353 41.1959 11.7012 41.1957 12.0528V32.1411C41.1958 32.4936 41.133 32.8425 41.0108 33.168C40.8887 33.4936 40.7096 33.7892 40.4838 34.038C40.258 34.2868 39.9901 34.4839 39.6952 34.618C39.4004 34.7521 39.0845 34.8205 38.7657 34.8193L19.4211 34.8203ZM18.6156 2.67818H2.43001C2.43001 2.67818 2.43001 9.37464 2.43001 22.7665H27.1746L18.6156 2.67818ZM25.2846 12.0528L30.1734 23.5356C30.2854 23.7988 30.3168 24.0951 30.2629 24.3798C30.2089 24.6644 30.0727 24.922 29.8746 25.1134L22.6089 32.1411H38.7657C38.7657 32.1411 38.7657 25.4447 38.7657 12.0528H25.2846ZM19.8972 31.205L25.8525 25.4447H17.91L19.8972 31.205Z"
                    fill="white"
                  />
                </svg>
                <span className="logo-title">E-Shop</span>
              </Link>
            </h1>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Kids
              </Link>
            </li>
          </ul>
          <ul className="nav-action">
            {user.email ? <p>{user.email}</p> : <></>}
            <li className="action-list">
              <Link to="#" className="action-link search">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.86599 17.7341C10.8713 17.7357 12.8176 17.056 14.3857 15.8065L22.2885 23.7065C22.3816 23.7995 22.4921 23.8733 22.6138 23.9237C22.7354 23.9741 22.8658 24 22.9974 24C23.1291 24 23.2595 23.9741 23.3811 23.9237C23.5027 23.8733 23.6133 23.7995 23.7064 23.7065C23.7995 23.6134 23.8733 23.5029 23.9237 23.3813C23.9741 23.2597 24 23.1294 24 22.9978C24 22.8662 23.9741 22.7359 23.9237 22.6143C23.8733 22.4927 23.7995 22.3822 23.7064 22.2891L15.8036 14.3892C17.0555 12.8186 17.7368 10.8696 17.736 8.86139C17.7352 6.85319 17.0524 4.90475 15.7993 3.33513C14.5461 1.76552 12.797 0.667747 10.8383 0.221572C8.87956 -0.224604 6.82734 0.00725983 5.01765 0.879196C3.20796 1.75113 1.74806 3.21147 0.876996 5.02108C0.00593114 6.83069 -0.224675 8.88233 0.22294 10.8401C0.670555 12.7978 1.76986 14.5456 3.34086 15.7972C4.91185 17.0489 6.86143 17.7302 8.87035 17.7297L8.86599 17.7341ZM4.01045 4.02304C4.9708 3.06098 6.19508 2.40535 7.52833 2.13913C8.86158 1.87291 10.2439 2.00807 11.5003 2.52751C12.7566 3.04694 13.8306 3.9273 14.5863 5.05715C15.3419 6.187 15.7453 7.51556 15.7453 8.87467C15.7453 10.2338 15.3419 11.5623 14.5863 12.6922C13.8306 13.822 12.7566 14.7024 11.5003 15.2218C10.2439 15.7413 8.86158 15.8764 7.52833 15.6102C6.19508 15.344 4.9708 14.6884 4.01045 13.7263C3.36783 13.0921 2.85758 12.3367 2.50933 11.5039C2.16107 10.671 1.98174 9.77734 1.98174 8.87467C1.98174 7.97199 2.16107 7.0783 2.50933 6.24545C2.85758 5.41261 3.36783 4.65719 4.01045 4.02304Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
            <li className="action-list">
              <Link to="/cart" className="action-link">
                <svg
                  width={24}
                  height={21}
                  viewBox="0 0 24 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                    d="M0.968446 1.9995H2.64055L5.14707 13.2951C4.52265 13.5929 3.99764 14.0645 3.63513 14.6531C3.27263 15.2418 3.08806 15.9225 3.10363 16.6134C3.06138 17.5149 3.37781 18.3964 3.98386 19.0657C4.58992 19.7349 5.4364 20.1377 6.33862 20.1859H19.6128C19.747 20.1904 19.8808 20.1678 20.0061 20.1195C20.1314 20.0713 20.2457 19.9983 20.3422 19.9051C20.4388 19.8118 20.5155 19.7001 20.5679 19.5766C20.6204 19.4531 20.6474 19.3203 20.6474 19.1862C20.6474 19.052 20.6204 18.9193 20.5679 18.7958C20.5155 18.6723 20.4388 18.5605 20.3422 18.4673C20.2457 18.374 20.1314 18.3011 20.0061 18.2528C19.8808 18.2046 19.747 18.182 19.6128 18.1864H6.33753C5.96901 18.1324 5.63525 17.9393 5.40504 17.6469C5.17482 17.3544 5.06568 16.9849 5.1001 16.6145C5.06526 16.2447 5.17351 15.8757 5.40263 15.5831C5.63175 15.2906 5.96434 15.0968 6.33207 15.0415H19.6128C19.8189 15.0416 20.02 14.9782 20.1887 14.8599C20.3574 14.7416 20.4854 14.5742 20.5553 14.3805L23.941 5.00912C23.9953 4.85812 24.0125 4.69628 23.991 4.53727C23.9695 4.37825 23.9101 4.22674 23.8177 4.09549C23.7253 3.96425 23.6026 3.85714 23.46 3.7832C23.3174 3.70926 23.1591 3.67067 22.9985 3.67066H5.06188L4.42187 0.784311C4.37283 0.561887 4.24918 0.362872 4.07141 0.220233C3.89364 0.0775937 3.67241 -0.000107976 3.44438 1.12616e-07H0.968446C0.708696 0.00857091 0.462453 0.117656 0.28174 0.30421C0.101028 0.490764 0 0.740175 0 0.999752C0 1.25933 0.101028 1.50874 0.28174 1.69529C0.462453 1.88185 0.708696 1.99093 0.968446 1.9995ZM21.5689 5.67235L18.9094 13.0442H7.14027L5.50202 5.67235H21.5689Z"
                    fill="white"
                    />
                </svg>
                <span className="qty">{numberQuantity}</span>
              </Link>
            </li>
            <li className="action-list">
              <Link to="/register" className="action-link">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                    d="M21.6556 17.4606L16.3503 15.2842C16.2114 15.2291 16.0921 15.1338 16.0077 15.0105C15.9233 14.8871 15.8777 14.7414 15.8766 14.592V13.3516C15.8752 13.1918 15.9282 13.0364 16.0269 12.9107C17.4315 11.09 18.1957 8.85656 18.2008 6.55705C18.2021 2.63495 15.7099 0 12 0C8.2901 0 5.79789 2.63495 5.79789 6.55832C5.80311 8.85781 6.56729 11.0913 7.97179 12.912C8.07022 13.0373 8.12322 13.1923 8.12211 13.3516V14.5907C8.12106 14.7402 8.07541 14.8859 7.99102 15.0092C7.90663 15.1325 7.78733 15.2279 7.64842 15.2829L2.34316 17.4594C1.65074 17.7398 1.05783 18.2206 0.640372 18.8402C0.222919 19.4597 -6.09315e-05 20.1898 1.24894e-08 20.9368V23.0008C0.000334747 23.2659 0.105884 23.5201 0.293463 23.7074C0.481042 23.8948 0.735311 24 1.00042 24H22.9996C23.2649 24 23.5194 23.8946 23.707 23.707C23.8946 23.5194 24 23.2649 24 22.9996V20.9368C23.9997 20.1899 23.7764 19.46 23.3587 18.8406C22.9411 18.2213 22.348 17.7408 21.6556 17.4606ZM22.0004 22.0004H1.99958V20.9368C2.00084 20.5867 2.10659 20.245 2.30328 19.9554C2.49996 19.6658 2.77863 19.4414 3.10358 19.3112L8.40884 17.1347C8.91525 16.9297 9.34893 16.5782 9.65431 16.1252C9.95969 15.6722 10.1229 15.1383 10.1229 14.592V13.3516C10.1237 12.7366 9.91521 12.1397 9.53179 11.6589C8.41635 10.1916 7.80811 8.40146 7.79874 6.55832C7.79874 3.19832 9.96884 2.00084 12.0013 2.00084C14.0337 2.00084 16.2038 3.19832 16.2038 6.55832C16.1944 8.40146 15.5862 10.1916 14.4707 11.6589C14.0874 12.1398 13.8789 12.7366 13.8796 13.3516V14.5907C13.8797 15.1371 14.0428 15.6709 14.3482 16.1239C14.6536 16.577 15.0873 16.9285 15.5937 17.1335L20.8989 19.3099C21.2239 19.4402 21.5026 19.6645 21.6992 19.9541C21.8959 20.2437 22.0017 20.5855 22.0029 20.9356L22.0004 22.0004Z"
                    fill="white"
                    />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
