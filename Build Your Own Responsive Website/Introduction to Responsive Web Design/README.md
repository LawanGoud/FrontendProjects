### Bootstrap Grid System

> Bootstrap Grid System is a collection of reusable code snippets to create responsive layouts.It is made up of `containers`,`rows`, and `columns`.

> It uses a `12 column system` for layouting. We can create up to 12 columns across the page.

### Container

> The purpose of a container is to hold rows and columns.

```
<div class='container'></div>
```

> Here, the container is a `div` element with the Bootstrap class name `container`.

### Row

> The purpose of a row is to wrap all the columns.

```
<div class='container'>
    <div class='row'></div>
</div>
```

>Here, the row is a `div` element with the Bootstrap class name `row`.

### Column

>We should place the columns inside a row and the content inside a column.

>We can specify the number of columns our content should occupy in any device.The number of columns we specify should be a number in the range of 1 to 12.

```
<div class="container">
  <div class="row">
    <div class="col-12">
      I'm your content inside the grid!
    </div>
  </div>
</div>
```

>Here, the column is a div element with the Bootstrap class name col-12.

### Note
> If Bootstrap class name is col-12, it occupies the entire width available inside the row.

>The Bootstrap class names `col-*` indicates the number of columns you would like to use out of the possible 12 columns per row. For example, `col-1`,`col-5`,etc.


### Try This

>HTML CODE
```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="heading">Taj Mahal</h1>
          <p>
            The Taj Mahal is an ivory-white marble mausoleum on the southern
            bank of the river Yamuna in the Indian city of Agra.
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
```

>CSS CODE
```
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap');

.heading {
  font-size: 24px;
  font-weight: bold;
}
```

### Creating Multiple Column Layouts

> The Layout in the below playground is a Two Column Layout.Similarly try out multiple column layouts like One Column Layout,Three Column Layout,etc.in the below Code Playground.

>HTML CODE

```
<!DOCTYPE html>
<html>
  <head> 
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <h1 class="heading">Taj Mahal</h1>
          <p>
            The Taj Mahal is an ivory-white marble mausoleum on the southern
            bank of the river Yamuna in the Indian city of Agra.
          </p>
        </div>
        <div class="col-4">
          <h1 class="heading">Mysore Palace</h1>
          <p>
            The Mysore Palace is a historical palace and the royal residence at
            Mysore in the Indian State of Karnataka.
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
```

>CSS CODE

```
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap');

.heading {
  font-size: 24px;
  font-weight: bold;
}
```

## Bootstrap Grid System

### Column Wrapping

>When we place more than 12 grid columns in a single row, the extra grid columns will wrap in a new line.

Try out the different combinations of Bootstrap class names like `col-4`,`col-4`,`col-6`,`col-6` and `col-6`,`col-4`,`col-6`,`col-4`,etc. in the below Code Playground.


>HTML CODE
```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h1 class="heading">Taj Mahal</h1>
          <p>The Taj Mahal is on the southern bank of the river Yamuna.</p>
        </div>
        <div class="col-6">
          <h1 class="heading">Mysore Palace</h1>
          <p>
            The Mysore Palace is a historical palace and the royal residence at
            Mysore.
          </p>
        </div>
        <div class="col-6">
          <h1 class="heading">Golden Temple</h1>
          <p>The Golden Temple is a gurdwara located in the city of Amritsar.</p>
        </div>
        <div class="col-6">
          <h1 class="heading">Varanasi</h1>
          <p>Varanasi is also known as Benares or Kashi. It is a city located on the bank of the river Ganges in Uttar Pradesh.</p>
        </div>
      </div>
    </div>
  </body>
</html>
```

>CSS CODE
```
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.heading {
  font-size: 24px;
  font-weight: bold;
}
```

### The Layout at different Breakpoints

>Bootstrap provides different `Bootstrap Grid Column class name prefixes` for Five Responsive Tiers (Responsive Breakpoints).

|Device|Device Size (Width)|Class Name Prefix|
|:---:|     :---:          |      :---:      |
|Extra small devices|  <576px |  col-|
|small devices|  >=576px   |    col-sm-    |
|Medium devices|    >= 768px  |    col-md-    |
|Large devices|   >=992      |    col-lg-    |
|Extra Large devices|   >=1200px      |    col-xl-    |

>If we define the behaviour of the Bootstrap Grid Column in a particular device, similar behaviour is guaranteed in all devices with larger sizes.

```
<div class="container">
  <div class="row">
    <div class="col-6">
      <h1 class="heading">Taj Mahal</h1>
      <p>The Taj Mahal is on the southern bank of the river Yamuna.</p>
    </div>
  </div>
</div>
```

### Class names in combinations

>We can use a combination of different Bootstrap class names for eacch Bootstrap Grid Column.

Try out differnt Bootstrap class names like `col-lg-4`, `col-lg-3`, `col-lg-8`, etc. in the below code playground.

>HTML CODE
```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <h1 class="heading">Taj Mahal</h1>
          <p>The Taj Mahal is on the southern bank of the river Yamuna.</p>
        </div>
        <div class="col-12 col-lg-6">
          <h1 class="heading">Mysore Palace</h1>
          <p>
            The Mysore Palace is a historical palace and the royal residence at
            Mysore.
          </p>
        </div>
        <div class="col-12 col-lg-6">
          <h1 class="heading">Golden Temple</h1>
          <p>The Golden Temple is a gurdwara located in the city of Amritsar.</p>
        </div>
        <div class="col-12 col-lg-6">
          <h1 class="heading">Varanasi</h1>
          <p>Varanasi is also known as Benares or Kashi. It is a city located on the bank of the river Ganges in Uttar Pradesh.</p>
        </div>
      </div>
    </div>
  </body>
</html>
```

>CSS CODE

```
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.heading {
  font-size: 24px;
  font-weight: bold;
}
```

### Note
>Bootstrap follows Mobile First Approach.
First, design the Layout of a mobile version, and this will be adopted by devices with larger sizes.
Second, design the design of a desktop version, and this will be adopted by devices with smaller sizes.


## CSS Box Properties

### Margin

>We can get spacing between the two HTML elements with the CSS Box property margin.

>To get space only on one particular side, we use Margin Variants.

- margin-top
- margin-right
- margin-bottom
- margin-left

>HTML CODE

```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="box orange-box"></div>
    <div class="box green-box"></div>
  </body>
</html>
```

>CSS CODE

```
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.box {
  padding: 30px;
  margin-bottom: 10px;
}
.orange-box {
  background-color: orange;
}
.green-box {
  background-color: green;
}
```

### Bootstrap Spacing Utilities

>Margin

|CSS Margin property|Bootstrap class name|
|:---:|:---:|
|margin|	m-*|
|margin-top	|mt-*|
|margin-right	|mr-*|
|margin-bottom|	mb-*|
|margin-left	|ml-*|

>The asterisk (*) symbol can be any number in the range of 0 to 5. For example, m-5, mr-2, mb-3, etc.

### Margin Values

|Size|	Value|
|:---:|:---:|
|0|	0|
|1|	0.25 * spacer|
|2|	0.5 * spacer|
|3|	1 * spacer|
|4|	1.5 * spacer|
|5|	3 * spacer|

>The spacer is a variable and has a value of 16 pixels by default.

### For example,

- mb-3 = 1 * 16px = 16px
- m-5 = 3 * 16px = 48px

## Note

>Avoiding using CSS `margin-left` and `margin-right` properties for `Bootstrap Grid Columns`.It disturbs the Bootstrap Grid System and gives unexpected results.

### Padding

|CSS Padding property|	Bootstrap class name|
|:---:|:---:|
|padding	|p-*|
|padding-top|	pt-*|
|padding-right	|pr-*|
|padding-bottom|	pb-*|
|padding-left	|pl-*|

>The asterisk (*) symbol can be any number in the range of 0 to 5. For example, p-3, pr-1, pb-5, etc.

### padding Values

|Size|	Value|
|:---:|:---:|
|0|	0|
|1|	0.25 * spacer|
|2|	0.5 * spacer|
|3|	1 * spacer|
|4|	1.5 * spacer|
|5|	3 * spacer|

>The spacer is a variable and has a value of 16 pixels by default.

For example,

- p-1 = 0.25 * 16px = 4px
- pt-4 = 1.5 * 16px = 24px

### Bootstrap Background color Utilities

>You can use one of the below Bootstrap class names to apply a background color to an HTML element.

>HTML CODE
```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="bg-primary p-2">
      <p>Primary</p>
    </div>
    <div class="bg-secondary p-2">
      <p>Secondary</p>
    </div>
    <div class="bg-success p-2">
      <p>Success</p>
    </div>
    <div class="bg-info p-2">
      <p>Info</p>
    </div>
    <div class="bg-warning p-2">
      <p>Warning</p>
    </div>
    <div class="bg-light p-2">
      <p>Light</p>
    </div>
    <div class="bg-dark p-2">
      <p>Dark</p>
    </div>
    <div class="bg-white p-2">
      <p>White</p>
    </div>
    <div class="bg-danger p-2">
      <p>Danger</p>
    </div>
  </body>
</html>
```

### Note

In the above Code Playground, we used to bootstrap class name `p-2` for padding.

### Developing Layouts for five Responsive Breakpoints

### Color Palette

>HTML CODE

```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <h1 class="color-palette-heading">Color Palette</h1>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
          <div class="color-box bg-primary">
            <p class="color-name">Primary</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
          <div class="color-box bg-secondary">
            <p class="color-name">Secondary</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
          <div class="color-box bg-success">
            <p class="color-name">Success</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
          <div class="color-box bg-info">
            <p class="color-name">Info</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
          <div class="color-box bg-warning">
            <p class="color-name">Warning</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
          <div class="color-box bg-danger">
            <p class="color-name">Danger</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

>CSS CODE

```
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.color-palette-heading {
 font-size: 24px;
 text-align: center;
}
.color-box {
 padding: 10px;
}
.color-name {
 color: white;
 font-size: 20px;
}
```

## Bootstrap Navbar

### Navbar

>A Navbar is a navigation header that is placed at the top of the page. With Bootstrap, a Navbar can extend or collapse, depending on the device size.

### HTML Nav element

>The HTML nav element is a container element similar to the HTML div element. We use the HTML nav element to add a Navbar to our website.

```
<nav class="navbar navbar-expand-lg navbar-light bg-light"></nav>
```

### Nav Items inside Navbar

```
<a class="nav-link active" href="#">
  Home
  <span class="sr-only">(current)</span>
</a>
<a class="nav-link" href="#">Features</a>
<a class="nav-link" href="#">Pricing</a>
<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
  Disabled
</a>
```

### Nav link

```
<a class="nav-link" href="#">Features</a>
```

>A piece of code in the HTML body element in the below Code Playground is the Bootstrap Navbar without a list-based approach Code.

```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" href="#">
            Home
            <span class="sr-only">(current)</span>
          </a>
          <a class="nav-link" href="#">Features</a>
          <a class="nav-link" href="#">Pricing</a>
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </div>
      </div>
    </nav>
  </body>
</html>
```

## HTML Elements

>In general, HTML elements can be divided into two categories.
- Block-level Elements
- Inline Elements

### Block-level Elements

>These elements always start in a new line and take up the full width available. So, an HTML Block-level element occupies the entire horizontal space of its parent element.

> For example, the HTML h1 element, p element, div element, etc

```
<h1 class="heading">The seven wonders of the world</h1>
<p class="paragraph">The Taj Mahal is one of the seven wonders of the world</p>
```

### Inline Elements

>These elements do not start in a new line and only take up as much width as necessary.

>For example, the HTML button element, img element, a element, etc.

```
<img
  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/mysore-palace2-img.png"
  class="image"
/>
<img
  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/varanasi1-img.png"
  class="image"
/>
```

```
<p class="paragraph">
  The <a class="link-text" href="https://en.wikipedia.org/wiki/Taj_Mahal">Taj Mahal</a>
  is one of the seven wonders of the world.
</p>
```

>HTML CODE

```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <h1 class="heading">
      The seven wonders of the world
    </h1>
    <p class="paragraph">
      The <a class="link-text" href="https://en.wikipedia.org/wiki/Taj_Mahal">Taj Mahal</a>
      is one of the seven wonders of the world.
    </p>
  </body>
</html>
```

>CSS Code

```
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.heading {
  background-color: lightblue;
  font-size: 24px;
  padding: 20px;
}
.paragraph {
  background-color: lightblue;
  padding: 20px;
}
.link-text {
  background-color: yellow;
}
```

## CSS Box Properties

### Margin
>We can align HTML Block-level elements horizontally using CSS margin property.

>Apart from values that are specified in pixels, it also accepts auto keyword as a value.

## Note
> If we specify the CSS text-align property to the HTML Block-level element, it aligns the text or HTML Inline elements inside it.

### Auto Value
>The child element will be horizontally centred inside the HTML container element.

>HTML CODE
```
<div class="navbar-nav nav-items-center">
  <a class="nav-link active" href="#">
    Home
    <span class="sr-only">(current)</span>
  </a>
  <a class="nav-link" href="#">About Me</a>
  <a class="nav-link" href="#">Projects</a>
  <a class="nav-link" href="#">Testimonials</a>
</div>
```

>CSS CODE
```
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.nav-items-center {
  margin: auto;
}
```

### Auto Value with Margin Variants
- Using auto as a value for the CSS margin-right property takes up all the available space, and the element gets aligned to the left.

- Using auto as a value for the CSS margin-left property takes up all the available space, and the element gets aligned to the right.

>HTML CODE
```
<div class="navbar-nav nav-items-right">
  <a class="nav-link active" href="#">
    Home <span class="sr-only">(current)</span>
  </a>
  <a class="nav-link" href="#">About Me</a>
  <a class="nav-link" href="#">Projects</a>
  <a class="nav-link" href="#">Testimonials</a>
</div>
```

>CSS CODE

```
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.nav-items-right {
  margin-left: auto;
}
```

## Bootstrap Utilities

### Margin

> Apart from the numbers 0-5, the margin also has the below Bootstrap class names.

- m-auto
- ml-auto
- mr-auto

> Try out the auto value with the margin variants in the below Code Playground.

>HTML CODE

```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand" href="#">
        <img
          src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/navbar-logo-img.png"
          class="navbar-image"
          alt=""
        />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-link active" href="#">
            Home <span class="sr-only">(current)</span>
          </a>
          <a class="nav-link" href="#">About Me</a>
          <a class="nav-link" href="#">Projects</a>
          <a class="nav-link" href="#">Testimonials</a>
        </div>
      </div>
    </nav>
  </body>
</html>
```

>CSS CODE

```
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.navbar-image {
  width: 40px;
  height: 40px;
  padding: 5px;
}
```

### Step by Step Process to build a Navbar
- Step-1: Adding Bootstrap Navbar Component

- Step-2: Adding Logo

- Step-3: Aligning Nav Items

- Step-4: Changing Navbar Background color

>HTML CODE

```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand" href="#">
        <img
          src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/navbar-logo-img.png"
          class="navbar-image"
          alt=""
        />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-link active" href="#">
            Home <span class="sr-only">(current)</span>
          </a>
          <a class="nav-link" href="#">About Me</a>
          <a class="nav-link" href="#">Projects</a>
          <a class="nav-link" href="#">Testimonials</a>
        </div>
      </div>
    </nav>
  </body>
</html>
```

>CSS CODE
```
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.navbar-image {
  width: 40px;
  height: 40px;
  padding: 5px;
}
```


## CSS Selectors & Inheritance

### CSS Selectors

>The CSS Selectors are used to select the HTML Elements that we want to style.

>The different types of CSS Selectors are:

- Simple Selector
  - Class Selector
  - ID Selector
  - Type (tag name) Selector
  - Attribute Selector
  - Universal Selector
  - Pseudo-class
- Compound Selector
- Complex Selectors an many more.

### Class Selector

>The CSS Class Selector selects all the HTML elements that have a given CSS class selector as their class attribute value. It consists of a dot(.), followed by the class name of the HTML element.

```
<p class="paragraph">The population of India is around 138 crores.</p>
```

```
.paragraph {
  color: blue;
}
```