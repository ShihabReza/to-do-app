import React from 'react';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
        <div class="flex-1">
          <a href="/" class="btn btn-ghost normal-case text-xl">Sudo App</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li><a href='/'>Home</a></li>
            <li><a href='/calander'>Calender</a></li>
           
            <li><a>Sudu</a></li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;