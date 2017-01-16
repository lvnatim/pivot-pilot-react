import React from "react";
import {Link} from "react-router";

class FilterPost extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      services:[]
    }
  }
  componentWillMount(){
    if(this.props.servicesArray){
      const services = this.props.servicesArray.map((term)=>{
        return <span key={term.term_id} dangerouslySetInnerHTML={{__html: term.name}}></span>
      })
      this.setState({services: services})
    }
  }
  render(){
    const style={backgroundImage: "url(" + this.props.backgroundImage + ")"}
    return(
        <div className="col-xs-12 col-sm-6 FilterPost" style={style}>
          <p className="title"><span>{this.props.title}</span></p>
          <h3><span>{this.props.excerpt}</span></h3>
          <p className="services">{this.state.services}</p>
          <Link to={this.props.link}><div className="overlay"/></Link>
        </div>
    )
  }
}

class FilterPostContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      clients: [],
      selectedFilter: "services",
      selectedSubFilter: null,
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      clients: nextProps.clients,
      selectedSubFilter: nextProps.selectedSubFilter,
      selectedFilter: nextProps.selectedFilter,
    });
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.selectedSubFilter === this.props.selectedSubFilter && nextProps.selectedFilter !== this.state.selectedFilter) return false;
    return true;
  }

  renderSelectedPosts(){
    if(this.state.selectedSubFilter){
      var filteredClients = this.state.clients
        .slice()
        .filter((client)=>{
          return client[this.state.selectedFilter].includes(this.state.selectedSubFilter);
        })
        .map((client)=>{
          const title = client.title.rendered;
          const excerpt = client.excerpt.rendered;
          const services = client.services;
          const servicesArray = client.services_array;
          const imageUrl = client.better_featured_image.source_url;
          const link = "/P&P/portfolio/" + client.id;
          return (
            <FilterPost 
              key={client.id} 
              terms={this.props.terms} 
              link={link} 
              title={title} 
              excerpt={excerpt} 
              services={services} 
              servicesArray={servicesArray}
              backgroundImage={imageUrl}
            />
          )
        })
      return filteredClients;
    } else if(this.state.selectedSubFilter === null){
      var filteredClients = this.state.clients
        .slice()
        .map((client)=>{
          const title = client.title.rendered;
          const excerpt = client.excerpt.rendered;
          const services = client.services;
          const servicesArray = client.services_array;
          const imageUrl = client.better_featured_image.source_url;
          const link = "/P&P/portfolio/" + client.id;
          return (
            <FilterPost 
              key={client.id} 
              terms={this.props.terms}
              link={link} 
              title={title} 
              excerpt={excerpt} 
              services={services}
              servicesArray={servicesArray} 
              backgroundImage={imageUrl}
            />
          )
        })
      return filteredClients;
    } else {
      return "No Posts Found";
    }
  }
  render(){
    return(
      <div className="row FilterPostContainer">
        {this.renderSelectedPosts()}
      </div>
    )
  }
}

class MainFilter extends React.Component{
  render(){
    return <li onClick={this.props.onClick.bind(null, this.props.name)}>{this.props.name}</li>
  }
}

class SubFilter extends React.Component{
  render(){
    return <li 
      className={this.props.status} 
      onClick={this.props.onClick.bind(null, this.props.filterId, this.props.index)} 
      onMouseOver={this.props.onMouseOver.bind(null, this.props.index)}
      onMouseLeave={this.props.onMouseLeave.bind(null)}
      dangerouslySetInnerHTML={{__html: this.props.name}}
    />
  }
}

export default class Filter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedFilter: "services",
      selectedSubFilter: null,
      mainFilters: [],
      subFilters: [],
      selectedDescription: "Click/hover on any of the terms to change the description and filter the posts.",
      temporaryDescription: null,
    }
  }

  componentWillReceiveProps(nextProps){
    const newMainFilters = [];
    const newSubFilters = [];
    if(nextProps.taxonomies){
      const taxonomies = nextProps.taxonomies.slice().reverse();
      taxonomies.forEach((taxonomyName, index)=>{
        newMainFilters.push(<MainFilter onClick={this.changeSelectedFilter.bind(this)} key={index} name={taxonomyName}/>);
      })
      this.setState({mainFilters: newMainFilters}, ()=>{
        this.setState({selectedFilter: newMainFilters[0].props.name});
      });
    }
    this.setState({subFilters: nextProps.terms});
    if(this.props.defaultSubFilter){
      const id = parseInt(this.props.defaultSubFilter);
      this.setState({selectedSubFilter: id});
      this.setDescription(id);
    }
  }

  changeSelectedFilter(name){
    this.setState({selectedFilter: name});
  }

  changeSelectedSubFilter(id, index){
    const currentMainFilter = this.state.selectedFilter;
    const newDescription = this.state.subFilters[currentMainFilter][index].description;
    this.setState({selectedSubFilter: id, selectedDescription: newDescription});
  }

  setDescription(id){
    if(this.state.subFilters.services){
      this.state.subFilters.services.find((subFilter)=>{
        if(subFilter.term_id === id){
          const newDescription = subFilter.description;
          this.setState({selectedDescription: newDescription});
          return true;
        }
      })
    }
  }

  setTemporaryDescription(index){
    const currentMainFilter = this.state.selectedFilter;
    const newDescription = this.state.subFilters[currentMainFilter][index].description;
    this.setState({temporaryDescription: newDescription});
  }

  removeTemporaryDescription(){
    this.setState({temporaryDescription: null});
  }

  renderSelectedSubFilters(){
    if(!this.state.selectedFilter || this.state.subFilters.length === 0){
      return;
    }
    const selectedFilter = this.state.selectedFilter;
    const subFilters = this.state.subFilters;
    const selectedSubFilters = [];
    subFilters[selectedFilter].forEach((term, index)=>{
      var statusClass = "";
      if(term.term_id === this.state.selectedSubFilter) statusClass = "active";
      selectedSubFilters.push(
        <SubFilter key={index} 
          onMouseOver={this.setTemporaryDescription.bind(this)}
          onMouseLeave={this.removeTemporaryDescription.bind(this)}
          onClick={this.changeSelectedSubFilter.bind(this)} 
          status={statusClass} 
          index={index}  
          filterId={term.term_id} 
          name={term.name}
        />)
      });
    return selectedSubFilters;
  }

  showAll(){
    this.setState({selectedSubFilter: null});
  }

  render(){
    return(
      <div className={"container-fluid FilterContainer " + this.state.selectedFilter}>
        <div className="row">
          <div className="col-xs-12 Filter">
            <ul>
              {this.state.mainFilters}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 SubFilter">
            <ul>
              <li onClick={this.showAll.bind(this)} className={ !this.state.selectedSubFilter ? "active" : "" }>Show All</li>
              {this.renderSelectedSubFilters()}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-8 FilterDescription">
            <p key={this.state.temporaryDescription || this.state.selectedDescription}>{this.state.temporaryDescription || this.state.selectedDescription}</p>
          </div>
        </div>
        <FilterPostContainer 
          terms={this.props.terms.services} 
          selectedFilter={this.state.selectedFilter} 
          selectedSubFilter={this.state.selectedSubFilter} 
          clients={this.props.clients}
        />
      </div>
    )
  }
}