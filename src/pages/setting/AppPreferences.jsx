import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
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
  console.log(theme);

  const [notification, setNotification] = useState({
    expenseAlerts : false,
    budgetAlerts : false,
    weeklyReport : false,
    monthlyReport : false,
    billPayment : false,
  })

  
  return (
    <div className="h-min-screen">
      <h1 className="text-base font-bold my-5">Edit App Preferences</h1>
      <div className="flex">
        <div className="w-1/2 border-r-2">
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm mb-2">Currency Settings</span>
            <div>
              <Select>
                <SelectTrigger className="w-[300px]">
                  <SelectValue placeholder="select a currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Currency</SelectLabel>
                    {/* <SelectItem value='USD'>USD</SelectItem>
                    <SelectItem value='EUR'>EUR</SelectItem>
                    <SelectItem value='GBP'>GBP</SelectItem> */}
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
            <span className="text-sm mb-2">Theme Mode</span>
            <div>
              <Select onValueChange={(value) => setTheme(value)} value={theme}>
                <SelectTrigger className='w-[300px]'>
                  <SelectValue placeholder='select a theme mode'  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Theme Mode</SelectLabel>
                    <SelectItem value='light'>Light</SelectItem>
                    <SelectItem value='dark'>Dark</SelectItem>
                    <SelectItem value='system'>System</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm mb-2">Language Settings</span>
            <Select>
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Language</SelectLabel>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="ar">Arabic</SelectItem>
                  <SelectItem value="de">German</SelectItem>

                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="w-1/2 ml-5">
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm mb-2">Notifications</span>
            <div className="flex flex-col gap-4">
             
              <div className="flex items-center gap-2">
                <label htmlFor="expenseAlerts">Expense Alerts</label>
                <input type="checkbox" className="toggle border-green-500 checked:bg-green-500 " />
                
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="budgetAlerts">Budget Alerts</label>
                <input type="checkbox" className="toggle border-green-500 checked:bg-green-500" />
                
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="weeklyReport">Weekly Report</label>
                <input type="checkbox" className="toggle border-green-500 checked:bg-green-500" />
                
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="monthlyReport">Monthly Report</label>
                <input type="checkbox" className="toggle border-green-500 checked:bg-green-500" />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="billPayment">Bill Payment</label>
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
