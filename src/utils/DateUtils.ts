import { Dayjs } from 'dayjs';

/**
 * @returns {string} - Devuelve la fecha actual en formato 'hh:mm'
 */
const getShortDate = (): string => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  const horasFormateadas = hour < 10 ? `0${hour}` : hour;
  const minutosFormateados = minute < 10 ? `0${minute}` : minute;

  const shortDate = `${horasFormateadas}:${minutosFormateados}`;

  return shortDate;
};

const getDDMMYY = (date: Dayjs): string => {
  return date.format('DD/MM/YY');
};

const getDateBefore = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
};

const getDayOfTheWeek = (strDate: string): string => {
  const date = new Date(strDate);
  const days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];
  return days[date.getDay()];
};

/**
 * Receives a YYYY-MM-DD date and returns it in DD/MM/YY format
 * @param string
 * @returns string
 */
const formatDate = (date: string) => {
  const parts = date.split('-');
  return `${parts[2]}/${parts[1]}/${parts[0].slice(2)}`;
};



export {
  getShortDate,
  getDateBefore,
  getDayOfTheWeek,
  getDDMMYY,
  formatDate,
};
