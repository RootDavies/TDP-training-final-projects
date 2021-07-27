using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace CSharpProject
{
    class Program
    {
        MySqlConnection con;
        MySqlCommand cmd;
        static void Main(string[] args)
        {
            SalesInfo prj = new SalesInfo();
            prj.MainMenu();

        }
    }
}

 