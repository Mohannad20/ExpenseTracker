import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { useTheme } from "../../components/theme-provider";

const AppPreferences = () => {
  const currencyApi = "4e1940d3b6d81ec140a4d2ce";
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${currencyApi}/latest/USD`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch currencies");
        }
        const data = await response.json();
        // console.log(data);
        // console.log(data.conversion_rates);
        setCurrencies(Object.keys(data.conversion_rates));
        // console.log(currencies);
        
      } catch (error) {
        console.error(error);
      }
    };
    fetchCurrencies();
  }, []);

  const { theme , setTheme } = useTheme();
  // console.log(theme);

  const [notification, setNotification] = useState({
    expenseAlerts : false,
    budgetAlerts : false,
    weeklyReport : false,
    monthlyReport : false,
    billPayment : false,
  })

  const {t, i18n } = useTranslation();
  
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  
  return (
    <div className="h-min-screen">
      <h1 className="text-base font-bold my-5">{t('editAppPreferences')}</h1>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
        <div className=" lg:border-r-2">
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm mb-2">{t('currencySettings')}</span>
            <div>
              <Select>
                <SelectTrigger className="w-[300px]">
                  <SelectValue placeholder={t('selectCurrency')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{t('currency')}</SelectLabel>
                   
                    {currencies.map((currency) => (
                      <SelectItem key={currency} value={currency}>
                        {currency}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm mb-2">{t('themeMode')}</span>
            <div>
              <Select onValueChange={(value) => setTheme(value)} value={theme}>
                <SelectTrigger className='w-[300px]'>
                  <SelectValue placeholder='select a theme mode'  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{t('themeMode')}</SelectLabel>
                    <SelectItem value='light'>{t('light')}</SelectItem>
                    <SelectItem value='dark'>{t('dark')}</SelectItem>
                    <SelectItem value='system'>{t('system')}</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm mb-2">{t('languageSettings')} </span>
            <Select onValueChange={changeLanguage}>
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder={t('selectLanguage')} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{t('language.language')}</SelectLabel>
                  <SelectItem value="en">{t('languages.en')}</SelectItem>
                  <SelectItem value="es">{t('languages.es')}</SelectItem>
                  <SelectItem value="de">{t('languages.de')}</SelectItem>
                  <SelectItem value="fr">{t('languages.fr')}</SelectItem>
                  <SelectItem value="ar">{t('languages.ar')}</SelectItem>

                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm mb-2">{t('notifications')}</span>
            <div className="flex flex-col gap-4">
             
              <div className="flex items-center gap-2">
                <label htmlFor="expenseAlerts">{t('expenseAlerts')}</label>
                <input type="checkbox" className="toggle border-green-500 checked:bg-green-500 " />
                
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="budgetAlerts">{t('budgetAlerts')}</label>
                <input type="checkbox" className="toggle border-green-500 checked:bg-green-500" />
                
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="weeklyReport">{t('weeklyReport')}</label>
                <input type="checkbox" className="toggle border-green-500 checked:bg-green-500" />
                
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="monthlyReport">{t('monthlyReport')}</label>
                <input type="checkbox" className="toggle border-green-500 checked:bg-green-500" />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="billPayment">{t('billPayment')}</label>
                <input type="checkbox" className="toggle border-green-500 checked:bg-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPreferences;
