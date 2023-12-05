const sidebarPlaceholder = document.getElementById('sidebar-wr');
const htm=`
		<div id="sidebar">
			<div class="inner">

				<!-- Menu -->
					<nav id="menu">
						<header class="major">
							<h2>Menu</h2>
						</header>
						<ul>
							<li><a href="index.html">Homepage</a></li>
							<!-- <li><a href="generic.html">Generic</a></li> -->
							<li>
								<span class="opener">Data Science Projects</span>
								<ul>
									<li><a href="projects_DS_gads_looker.html">Google Ads Dashboard in Looker Studio</a></li>
									<li><a href="projects_DS_KW_Clustering.html">Keyword Clustering</a></li>
									<li><a href="projects_DS_hf_movie_genre.html">Hugging Face Competition: Movie Genre Prediction</a></li>
								</ul>
							</li>
							<li>
								<span class="opener">Game Development Projects</span>
								<ul>
									<li><a href="projects_GD_Unity_minimap.html">Unity Minimap</a></li>
								</ul>
							</li>
						</ul>
					</nav>

				<!-- Section -->
					<section>
						<header class="major">
							<h2>Get in touch</h2>
						</header>
						<p>Feel free to reach out!</p>
						<ul class="contact">
							<li class="icon solid fa-envelope"><a href="mailto:zayed.upal@gmail.com">zayed.upal@gmail.com</a></li>
							<li class="icon brands fa-linkedin"><a href="https://www.linkedin.com/in/zayed-upal/">zayedupal</a></li>
							<!-- <li class="icon solid fa-home">1234 Somewhere Road #8254<br />
							Nashville, TN 00000-0000</li> -->
						</ul>
					</section>

				<!-- Footer -->
					<footer id="footer">
						<p class="copyright">&copy; 2023 Zayed Uddin Chowdhury</p>
					</footer>

			</div>
		</div>`
const fetchSidebarContent = async () => {
//   const response = await fetch('sidebar.html');
//   const sidebarHTML = await response.text();

  sidebarPlaceholder.innerHTML = htm;
};

fetchSidebarContent();