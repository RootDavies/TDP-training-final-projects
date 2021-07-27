using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace CSharpProject
{
    class SalesInfo
    {
        // CSharpProject dbf;

        MySqlConnection con;
        MySqlCommand cmd;
        public SalesInfo() {
            con = new MySqlConnection("server=localhost;user=root;password=root;database=Nationwide");
            con.Open();
            cmd = new MySqlCommand();
            cmd.Connection = con;
        }
    public void MainMenu()
        {
          //  dbf = new CSharpProject();
            Console.WriteLine("Please choose an option");
            Console.WriteLine("1. Data Entry");
            Console.WriteLine("2. Reports");
            int choice =Int32.Parse(Console.ReadLine());

            if (choice ==1)
            {
                DataEntry();
            }
            if (choice == 2) {
                Reports();
            }
        }
    private void DataEntry()
        {
            Console.WriteLine("**D a t a  E n t r y  S c r e e n**");
            
            Console.Write("Enter Product Name: ");
            string ProductName = Console.ReadLine();

            Console.Write("Enter Quantity: ");
            int Quantity = Int32.Parse(Console.ReadLine());

            Console.Write("Enter Price: ");
            float Price = float.Parse(Console.ReadLine());

            string insertSQL = $"insert into sales(productname,quantity,price,saledate) values('{ProductName}',{Quantity},{Price},now())";
            string row = "";
            cmd.CommandText = insertSQL;
            cmd.ExecuteNonQuery();
            MySqlDataReader data = cmd.ExecuteReader();
            while (data.Read())
            {
                for (int i = 0; i < data.FieldCount; i++)
                {
                    row += data.GetString(i) + " ";

                }
                Console.WriteLine(row);
                row = "";
            }
            data.Close();
            Console.WriteLine("Your data has been added");
            Console.WriteLine("Enter Y to add additional items or N to exit");
            string action = Console.ReadLine();
            if (action == "Y" || action == "y")
            {
                DataEntry();
            }
            else
            {
                Environment.Exit(0);
            }
        }
    private void Reports()
        {
            Console.WriteLine("**R e p o r t  S c r e e n**");
            Console.WriteLine("1. List products sold in a specific year");
            Console.WriteLine("2. List products sold by month of a year");
            Console.WriteLine("3. List sales by year");
            Console.WriteLine("4. List sales by month of a year");
            Console.WriteLine("5. Exit");

            int selection = Int32.Parse(Console.ReadLine());

            if (selection ==1)
                {
                Console.WriteLine("**List of Products Sold By Year**");
                Console.WriteLine("Enter year");
                int Year = Int32.Parse(Console.ReadLine());
                string sql = $"select productname from sales where year(saleDate)={Year} group by productname";
                showRecords(sql);

            }

            if (selection ==2)
            {
                Console.WriteLine("**List of Products Sold By Year and Month**"); 
                Console.WriteLine("Enter year");
                int Year = Int32.Parse(Console.ReadLine());
                Console.WriteLine("Enter month");
                int Month = Int32.Parse(Console.ReadLine());
                string sql = $"select productname from sales where year(saleDate)={Year} and month(saleDate)={Month}";
                showRecords(sql);
               
            }
           
            if (selection == 3)
            {
                Console.WriteLine("**Total Sales By Year**"); 
                Console.WriteLine("Enter a specific year");
                int Year = Int32.Parse(Console.ReadLine());
                string sql = $"select sum(quantity*price) from sales where year(saleDate)={Year}";
                showRecords(sql);
              
            }
            if (selection ==4)
            {
                Console.WriteLine("**Total Sales By Month and Year**"); 
                Console.WriteLine("Enter year");
                int Year = Int32.Parse(Console.ReadLine());
                Console.WriteLine("Enter month");
                int Month = Int32.Parse(Console.ReadLine());
                string sql = $"select sum(quantity*price) from sales where year(saleDate)={Year} and month(saleDate)={Month}";
                showRecords(sql);
             
            }
            if (selection == 5)
            {
                Environment.Exit(0);          
            }
        }

        private void showRecords(string sqlquery) {
            string row = "";
            cmd.CommandText = sqlquery;
            cmd.ExecuteNonQuery();
            MySqlDataReader data = cmd.ExecuteReader();
            while (data.Read())
            {
                for (int i = 0; i < data.FieldCount; i++)
                {
                    row += data.GetString(i) + " ";
                       
                }
                Console.WriteLine(row);
             
                row = "";
            }
            data.Close();
            Console.WriteLine("Enter Y to continue and N to exit");
            string action = Console.ReadLine();
            if (action == "Y" || action == "y")
            {
                MainMenu();

            }
            else
            {
                Environment.Exit(0);
            }

        }
    }

  
}
